import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Empresa } from '../empresa';
import { EmpresasService } from '../empresas.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaResolverGuard implements Resolve<Empresa> {

  constructor(private service: EmpresasService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Empresa> {
    if (route.params && route.params.codigo) {
        return this.service.loadByCodigo(route.params.codigo);
    }
    return of({
      codigo: null,
      nomeReal: null,
      nomeFantasia: null,
      filiais: null
    });
  }

}
