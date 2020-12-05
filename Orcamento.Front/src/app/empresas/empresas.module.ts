import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasListaComponent } from './empresas-lista/empresas-lista.component';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [EmpresasListaComponent, EmpresasFormComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    ReactiveFormsModule,
    CollapseModule,
    TooltipModule
  ]
})
export class EmpresasModule { }
