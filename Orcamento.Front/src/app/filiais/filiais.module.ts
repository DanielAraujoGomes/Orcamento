import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiliaisFormComponent } from './filiais-form/filiais-form.component';
import { FiliaisListaComponent } from './filiais-lista/filiais-lista.component';
import { FiliaisRoutingModule } from './filiais-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [FiliaisFormComponent, FiliaisListaComponent],
  imports: [
    CommonModule,
    FiliaisRoutingModule,
    ReactiveFormsModule,
    CollapseModule
  ]
})
export class FiliaisModule { }
