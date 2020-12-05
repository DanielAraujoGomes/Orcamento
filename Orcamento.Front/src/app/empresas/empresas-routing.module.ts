import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasListaComponent } from './empresas-lista/empresas-lista.component';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { EmpresaResolverGuard } from './guards/empresa-resolver.guard';


const routes: Routes = [
  { path: '', component: EmpresasListaComponent},
  { path: 'novo', component: EmpresasFormComponent, resolve: { empresa: EmpresaResolverGuard}},
  { path: 'editar/:codigo', component: EmpresasFormComponent, resolve: { empresa: EmpresaResolverGuard} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
