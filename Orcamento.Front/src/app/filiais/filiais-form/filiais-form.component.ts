import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FiliaisService } from '../filiais.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Lista } from '../../shared/lista/lista';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

export enum Alert {
  UPDATE_SUCCESS = 'Filial atualizada com sucesso!',
  UPDATE_ERROR = 'Erro ao atualizar filial, tente novamente!',
  CREATE_SUCCESS = 'Filial criada com sucesso!',
  CREATE_ERROR = 'Erro ao criar filial, tente novamente!',
  EMPRESA_ERROR = 'Erro ao carregar empresas. Tente novamente mais tarde.'
}

@Component({
  selector: 'app-filiais-form',
  templateUrl: './filiais-form.component.html',
  styleUrls: ['./filiais-form.component.scss']
})
export class FiliaisFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  edit: boolean;
  empresas: Lista;

  constructor(
    private fb: FormBuilder,
    private service: FiliaisService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onLoadEmpresas();
    const filial = this.route.snapshot.data.filial;
    this.edit = (filial.codigo == null) ? false : true;
    this.form = this.fb.group({
      codigo: [filial.codigo, Validators.required],
      nome: [filial.nome, Validators.required],
      empresaCodigo: [filial.empresaCodigo, Validators.required]
    });
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.save(this.form.value , this.edit).subscribe(
        success => { this.edit ? this.onUpdate() : this.onCreate(); },
        error => this.modal.showAlertDanger( this.edit ? Alert.UPDATE_ERROR : Alert.CREATE_ERROR )
      );
    }
  }

  handleEmpresaError() {
    this.modal.showAlertDanger(Alert.EMPRESA_ERROR);
  }

  private onLoadEmpresas() {
    this.service.listEmpresa().pipe(
      catchError(error => {
        this.handleEmpresaError();
        return EMPTY;
      })).subscribe( dados => this.empresas = dados);
  }

  private onUpdate() {
    this.modal.showAlertSuccess(Alert.UPDATE_SUCCESS);
    this.onBack();
  }

  private onCreate() {
    this.modal.showAlertSuccess(Alert.CREATE_SUCCESS);
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  onBack() {
    this.location.back();
  }

}
