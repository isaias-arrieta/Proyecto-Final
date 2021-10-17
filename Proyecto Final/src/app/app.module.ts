import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UAuthComponent } from './components/uauth/uauth.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalRegisComponent } from './components/modal-regis/modal-regis.component';
import { ModalRecucontraComponent } from './components/modal-recucontra/modal-recucontra.component';

@NgModule({
  declarations: [
    AppComponent,
    UAuthComponent,
    ModalRegisComponent,
    ModalRecucontraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
