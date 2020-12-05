import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from './empresa';
import { CrudService } from '../shared/crud-service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService extends CrudService<Empresa> {

  constructor(protected http: HttpClient) {
    super(http, '/api/Empresa');
  }

}
