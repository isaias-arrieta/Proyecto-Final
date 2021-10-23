import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UAuthComponent } from './components/uauth/uauth.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalRegisComponent } from './components/modal-regis/modal-regis.component';
import { ModalRecucontraComponent } from './components/modal-recucontra/modal-recucontra.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { sidenavComponent } from './components/sidenav/sidenav.component';
import { UpfileComponent } from './components/upfile/upfile.component';
import { DeluserComponent } from './components/deluser/deluser.component'
import { AuthInterceptor } from './conection/uauth.Interceptor';
import { HTTP_INTERCEPTORS  } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UAuthComponent,
    ModalRegisComponent,
    ModalRecucontraComponent,
    MainpageComponent,
    sidenavComponent,
    UpfileComponent,
    DeluserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
