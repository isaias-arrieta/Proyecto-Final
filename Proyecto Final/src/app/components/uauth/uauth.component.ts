import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRecucontraComponent } from '../modal-recucontra/modal-recucontra.component'; 

@Component({
  selector: 'app-uauth',
  templateUrl: './uauth.component.html',
  styleUrls: ['./uauth.component.scss']
})
export class UAuthComponent implements OnInit {

  username!: string;
  password!: string;
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  LoginUser(){

    if(this.username == "Admin" && this.password == "123456789"){
      console.log("Test de autenticacion: Aprobado");
    }
    else{
      console.log("Test de autenticacion: Incorrecto");
    }
  }

  openmodRC(){
    this.dialogRef.open(ModalRecucontraComponent);
  }
}
