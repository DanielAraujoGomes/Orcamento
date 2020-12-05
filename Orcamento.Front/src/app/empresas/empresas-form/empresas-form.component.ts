import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { EmpresasService } from '../empresas.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';

export enum AlertEmpresa {
  UPDATE_SUCCESS = 'Empresa atualizada com sucesso!',
  UPDATE_ERROR = 'Erro ao atualizar empresa, tente novamente!',
  CREATE_SUCCESS = 'Empresa criada com sucesso!',
  CREATE_ERROR = 'Erro ao criar empresa, tente novamente!'
}

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.scss']
})
export class EmpresasFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  edit: boolean;

  constructor(
    private fb: FormBuilder,
    private service: EmpresasService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

      const empresa = this.route.snapshot.data.empresa;

      this.edit = (empresa.codigo == null) ? false : true;

      this.form = this.fb.group({
        codigo: [empresa.codigo, Validators.required],
        nomeReal: [empresa.nomeReal, Validators.required],
        nomeFantasia: [empresa.nomeFantasia, Validators.required],
      });

      this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.save(this.form.value , this.edit).subscribe(
        success => { this.edit ? this.onUpdate() : this.onCreate(); },
        error => this.modal.showAlertDanger( this.edit ? AlertEmpresa.UPDATE_ERROR : AlertEmpresa.CREATE_ERROR )
      );
    }
  }

  private onUpdate() {
    this.modal.showAlertSuccess(AlertEmpresa.UPDATE_SUCCESS);
    this.onBack();
  }

  private onCreate() {
    this.modal.showAlertSuccess(AlertEmpresa.CREATE_SUCCESS);
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('onCancel');
  }

  onBack() {
    this.location.back();
  }

}
