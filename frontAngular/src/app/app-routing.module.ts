import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { GuardarComponent } from './Components/guardar/guardar.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/inicio', pathMatch: 'full'
  },
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'guardar', component: GuardarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
