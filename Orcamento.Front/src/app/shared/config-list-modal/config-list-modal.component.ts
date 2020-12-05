import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';
import { ConfigList } from './configList';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-config-list-modal',
  templateUrl: './config-list-modal.component.html',
  styleUrls: ['./config-list-modal.component.scss']
})
export class ConfigListModalComponent implements OnInit {

  confirmResult: Subject<ConfigList>;

  configForm: FormGroup;

  pagination: boolean;
  pageSize: number;

  private configList: ConfigList = {
    success: true,
    pagination: true,
    pageSize: 0
  };

  constructor(private fb: FormBuilder, public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.confirmResult = new Subject<ConfigList>();
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.configList.success = value;
    this.configList.pagination = this.pagination;
    this.configList.pageSize = this.pageSize;
    this.confirmResult.next(this.configList);
    this.bsModalRef.hide();
  }
}
