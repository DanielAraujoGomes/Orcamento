import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiliaisListaComponent } from './filiais-lista/filiais-lista.component';
import { FiliaisFormComponent } from './filiais-form/filiais-form.component';
import { FilialResolverGuard } from './guards/filial-resolver.guard';

const routes: Routes = [
  { path: '', component: FiliaisListaComponent},
  { path: 'novo', component: FiliaisFormComponent, resolve: { filial: FilialResolverGuard}},
  { path: 'editar/:codigo', component: FiliaisFormComponent, resolve: { filial: FilialResolverGuard} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiliaisRoutingModule { }
