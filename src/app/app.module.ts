import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JustListComponent } from './just-list/just-list.component';
import { JustFavoritosComponent } from './just-favoritos/just-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    JustListComponent,
    JustFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
