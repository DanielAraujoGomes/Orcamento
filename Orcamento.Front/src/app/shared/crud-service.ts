import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Lista } from '../shared/lista/lista';

export class CrudService<T> {

  constructor(protected http: HttpClient, private API_URL: string) { }

  list() {
    return this.http.get<Lista>(`${this.API_URL}/lista`).pipe(take(1));
  }

  listFilter(record: Lista) {
    return this.http.post<Lista>(`${this.API_URL}/lista`, record).pipe(take(1));
  }

  loadByCodigo(codigo: string) {
    return this.http.get<T>(`${this.API_URL}/${codigo}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http.put(this.API_URL, record).pipe(take(1));
  }

  save(record: T, edit: boolean ) {
    return (edit) ? this.update(record) : this.create(record);
  }

  remove(codigo: string) {
    return this.http.delete(`${this.API_URL}/${codigo}`).pipe(take(1));
  }
}
