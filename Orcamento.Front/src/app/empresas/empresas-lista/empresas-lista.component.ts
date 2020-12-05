import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { EMPTY, Subject } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Filter } from './../../shared/lista/filter';
import { EmpresasService } from '../empresas.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Lista } from 'src/app/shared/lista/lista';
import { ConfigList } from '../../shared/config-list-modal/configList';

export enum Alert {
  LISTA_ERROR = 'Erro ao carregar empresas. Tente novamente mais tarde.',
  CONFIRMACAO_EXCLUSAO = 'Tem certeza que deseja remover essa empresa?',
  DELETE_SUCCESS = 'Empresa removida com sucesso!',
  DELETE_ERROR = 'Erro ao remover empresa. Tente novamente mais tarde!',
  SESSION_STORAGE = 'empresaLista',
  CONFIG_LIST_ERROR = 'Erro ao configurar a lista. Tente novamente mais tarde!',
  CONFIG_LIST_SUCCESS = 'Configuração aplicada com sucesso.'
}

@Component({
  selector: 'app-empresas-lista',
  templateUrl: './empresas-lista.component.html',
  styleUrls: ['./empresas-lista.component.scss']
})
export class EmpresasListaComponent implements OnInit {

  form: FormGroup;
  error$ = new Subject<boolean>();
  deleteModalRef: BsModalRef;
  filterModalRef: BsModalRef;
  list: Lista = {
    pagination: true,
    pagePrevious: 0,
    pageNext: 0,
    pageCount: 0,
    pageNow: 0,
    pageSize: 0,
    regCount: 0,
    pages: [],
    select: [],
    orderBy: [],
    filters: [],
    data: null
  };
  isCollapsed = true;

  @ViewChild('deleteModal', {static : false}) deleteModal: any;

  constructor(
    private fb: FormBuilder,
    private service: EmpresasService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    const session = JSON.parse(sessionStorage.getItem(Alert.SESSION_STORAGE));
    if (session != null) { this.list = session; }
    this.setInputSearch(this.list.filters);
    this.lista();
    sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
  }

  private setInputSearch(filter: Filter[]) {

    let codigo: string = null;
    let nomeFantasia: string = null;

    filter.forEach(x => {
      if (x.name == 'codigo') { codigo = x.value; }
      if (x.name == 'nomeFantasia') { nomeFantasia = x.value; }
    });

    if (filter.length >= 1) { this.isCollapsed = false; }

    this.form = this.fb.group({
      codigo: [codigo],
      nomeFantasia: [nomeFantasia]
    });
  }

  onRefresh() {
    this.list.filters = [];
    this.list.pageNow = 1;
    this.isCollapsed = true;
    this.form.reset();
    this.lista();
    sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
  }

  onFilter(template: TemplateRef<any>) {
    this.filterModalRef = this.modalService.show(template);
  }

  onPagination(page: number) {
    this.list.pageNow = page;
    this.lista();
    sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
  }

  onFilterConfirm() {
    const filters: Filter[] = [];
    this.list.filters = [];
    this.list.pageNow = 1;
    Object.keys(this.form.controls).forEach(key => {
      if (this.form.get(key).value != null && this.form.get(key).value != '') {
        this.list.filters.push({
          name: key,
          value: this.form.get(key).value
        });
      }
    });
    this.lista();
    sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
  }

  handleError() {
    this.alertService.showAlertDanger(Alert.LISTA_ERROR);
  }

  onEdit(codigo: string) {
    this.router.navigate(['editar', codigo], {relativeTo: this.route});
  }

  onDelete(codigo: string) {
    const result$ = this.alertService.showConfirm('Confirmação', Alert.CONFIRMACAO_EXCLUSAO);
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.service.remove(codigo) : EMPTY)
    )
    .subscribe(
      success => this.onConfirmeDeleteSuccess(),
      error => this.onConfirmeDeleteError()
    );
  }

  onConfigList() {
    const session = JSON.parse(sessionStorage.getItem(Alert.SESSION_STORAGE));
    const list: Lista = session as Lista;
    // this.list = session;

    const configList: ConfigList = {
      success: true,
      pagination: list.pagination,
      pageSize: list.pageSize
    };

    const result$ = this.alertService.showConfigList(configList);
    result$.asObservable().pipe(take(1))
    .subscribe(
      success => this.onConfirmeConfigListSuccess(success),
      error => this.onConfirmeConfigListError()
    );
  }

  private onConfirmeConfigListSuccess(configList: ConfigList) {
    if (!configList.success) { return; }
    console.log(configList);

    this.list.pageSize = configList.pageSize != null ? configList.pageSize : 0;
    this.list.pagination = configList.pagination != null ? configList.pagination : true;
    sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
    this.lista();
    this.alertService.showAlertSuccess(Alert.CONFIG_LIST_SUCCESS);
  }

  private onConfirmeConfigListError() {
    this.alertService.showAlertDanger(Alert.CONFIG_LIST_ERROR);
  }

  private lista() {
    this.service.listFilter(this.list).pipe(
      take(1),
      catchError(error => {
        this.handleError();
        return EMPTY;
      })
    ).subscribe(dados => this.list = dados);
  }

  private onConfirmeDeleteSuccess() {
    this.onRefresh();
    this.alertService.showAlertSuccess(Alert.DELETE_SUCCESS);
  }

  private onConfirmeDeleteError() {
    this.alertService.showAlertDanger(Alert.DELETE_ERROR);
  }
}
