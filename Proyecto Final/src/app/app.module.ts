import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UAuthComponent } from './components/uauth/uauth.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalRegisComponent } from './components/modal-regis/modal-regis.component';

@NgModule({
  declarations: [
    AppComponent,
    UAuthComponent,
    ModalRegisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
