import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JustListComponent } from './just-list/just-list.component';
import { FormsModule } from '@angular/forms';
import { JustContactComponent } from './just-contact/just-contact.component';
import { JustComprasComponent } from './just-compras/just-compras.component';
import { JustCarrComponent } from './just-carr/just-carr.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    JustListComponent,
    JustContactComponent,
    JustComprasComponent,
    JustCarrComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
