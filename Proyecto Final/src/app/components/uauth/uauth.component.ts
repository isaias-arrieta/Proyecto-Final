import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisComponent } from '../modal-regis/modal-regis.component';
import { ModalRecucontraComponent } from '../modal-recucontra/modal-recucontra.component'; 
import { DataService } from "src/app/conection/data.service";
import { Router } from "@angular/router";
import { MainpageComponent } from '../mainpage/mainpage.component';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-uauth',
  templateUrl: './uauth.component.html',
  styleUrls: ['./uauth.component.scss']
})
export class UAuthComponent implements OnInit {

  username: string ="";
  password: string="";

  constructor(private dialogRef : MatDialog, private datasv: DataService, public router: Router) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialogRef.open(ModalRegisComponent);
  }

 
  LoginUser() {
    console.log(this.username);
        if (this.username == "" || this.password == "") {
          alert("No se permiten espacios en blanco");
        }
        else {
          console.log("Prueba");
           this.datasv.login({
            email: this.username,
            hash: this.password
          }).subscribe(data => {
            this.datasv.setToken(data.token);            
            this.router.navigate(["/mainpage"]);
          },
          err => {
            alert("Correo o contraseña incorrectos");
          },
          );
          
        }
      }
      getUserLogged() {
        this.datasv.getprofile("1").subscribe(user => {
          console.log(user);
        });
      }

  openmodRC(){
    this.dialogRef.open(ModalRecucontraComponent);
  }
}
