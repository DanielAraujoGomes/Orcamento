import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'filiais'
  },
  {
    path: 'empresas', loadChildren: './empresas/empresas.module#EmpresasModule'
  },
  {
    path: 'filiais', loadChildren: './filiais/filiais.module#FiliaisModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
