import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
  ],
  imports: [
    BrowserModule,
  ]

})
export class AppModule { };
