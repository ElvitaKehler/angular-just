import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JustComprasComponent } from './just-compras/just-compras.component';
import { JustContactComponent } from './just-contact/just-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productosJust',
    pathMatch : 'full', 

  },
  {
    path: 'productosJust',
    component: JustComprasComponent, 

  },
  {
    path: 'contacto',
    component: JustContactComponent, 

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
