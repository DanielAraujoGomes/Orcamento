import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ConfigListModalComponent } from './config-list-modal/config-list-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlertModalComponent, ConfirmModalComponent, ConfigListModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AlertModalComponent,
    ConfirmModalComponent,
    ConfigListModalComponent
  ],
  entryComponents: [AlertModalComponent, ConfirmModalComponent, ConfigListModalComponent]
})

export class SharedModule { }
