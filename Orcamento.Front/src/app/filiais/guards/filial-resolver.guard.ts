import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Filial } from '../filial';
import { FiliaisService } from '../filiais.service';

@Injectable({
  providedIn: 'root'
})
export class FilialResolverGuard implements Resolve<Filial> {

  constructor(private service: FiliaisService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Filial> {
    if (route.params && route.params.codigo) {
      return this.service.loadByCodigo(route.params.codigo);
    }
    return of({
      codigo: null,
      nome: null,
      empresaCodigo: null,
      empresa: null,
    });
  }

}
