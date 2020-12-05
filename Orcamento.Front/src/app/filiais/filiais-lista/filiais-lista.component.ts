import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Lista } from 'src/app/shared/lista/lista';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject, EMPTY } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FiliaisService } from '../filiais.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take, switchMap, catchError } from 'rxjs/operators';
import { CollapseModule } from 'ngx-bootstrap/collapse';

export enum Alert {
  LISTA_ERROR = 'Erro ao carregar filiais. Tente novamente mais tarde.',
  CONFIRMACAO_EXCLUSAO = 'Tem certeza que deseja remover essa filial?',
  DELETE_SUCCESS = 'Filial removida com sucesso!',
  DELETE_ERROR = 'Erro ao remover filial. Tente novamente mais tarde!',
  SESSION_STORAGE = 'filialLista'
}

@Component({
  selector: 'app-filiais-lista',
  templateUrl: './filiais-lista.component.html',
  styleUrls: ['./filiais-lista.component.scss']
})
export class FiliaisListaComponent implements OnInit {

  filialLista: Lista;
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
    private service: FiliaisService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private collapse: CollapseModule
  ) { }

  ngOnInit() {
    const sessionLista = JSON.parse(sessionStorage.getItem(Alert.SESSION_STORAGE));
    if (sessionLista != null) { this.list = sessionLista; }
    // tslint:disable-next-line: one-variable-per-declaration
    let codigo: string, nome: string, filter: any[];
    if (this.list.filters.length >= 1) {
      this.isCollapsed = false;
      filter = this.list.filters;
      // tslint:disable-next-line: triple-equals
      codigo = filter.find(x => x.name == 'codigo') ? filter.find(x => x.name == 'codigo').value : null;
      // tslint:disable-next-line: triple-equals
      nome = filter.find(x => x.name == 'nome') ? filter.find(x => x.name == 'nome').value : null;
    }
    this.lista();
    this.form = this.fb.group({
      codigo: [codigo],
      nome: [nome]
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
    this.list.filters = [];
    this.list.pageNow = 1;
    Object.keys(this.form.controls).forEach(key => {
      // tslint:disable-next-line: triple-equals
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

  private lista() {
    this.service.listFilter(this.list).pipe(
      catchError(error => {
        this.handleError();
        return EMPTY;
      }
    )).subscribe(dados => this.filialLista = dados);
  }

  private onConfirmeDeleteSuccess() {
    this.onRefresh();
    this.alertService.showAlertSuccess(Alert.DELETE_SUCCESS);
  }

  private onConfirmeDeleteError() {
    this.alertService.showAlertDanger(Alert.DELETE_ERROR);
  }
}
