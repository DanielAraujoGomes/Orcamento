import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ConfigListModalComponent } from './config-list-modal/config-list-modal.component';
import { ConfigList } from './config-list-modal/configList';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes, dismissTimeount?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeount) {
      setTimeout(() => bsModalRef.hide(), dismissTimeount);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 2000);
  }

  showConfirm(title: string, msg: string, okText?: string, cancelTxt?: string) {
    const bsModelRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModelRef.content.title = title;
    bsModelRef.content.msg = msg;
    if (okText) { bsModelRef.content.okText = okText; }
    if (cancelTxt) { bsModelRef.content.cancelText = cancelTxt; }

    return (bsModelRef.content as ConfirmModalComponent).confirmResult;
  }

  showConfigList(configList: ConfigList) {
    const bsModelRef: BsModalRef = this.modalService.show(ConfigListModalComponent);
    bsModelRef.content.pagination = configList.pagination;
    bsModelRef.content.pageSize = configList.pageSize;
    return (bsModelRef.content as ConfigListModalComponent).confirmResult;
  }

}
