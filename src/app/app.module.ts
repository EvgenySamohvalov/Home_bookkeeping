import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { My2Component } from './my2/my2.component'; //регестрируем компонент

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    My2Component// прописываем его тут
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
