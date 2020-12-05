import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Filial } from './filial';
import { HttpClient } from '@angular/common/http';
import { Lista } from '../shared/lista/lista';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiliaisService extends CrudService<Filial> {

  constructor(protected http: HttpClient) {
    super(http, '/api/Filial');
  }

  listEmpresa() {
    return this.http.get<Lista>('/api/Empresa/lista').pipe(take(1));
  }
}
