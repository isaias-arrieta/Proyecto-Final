import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uauth',
  templateUrl: './uauth.component.html',
  styleUrls: ['./uauth.component.scss']
})
export class UAuthComponent implements OnInit {

  username!: string;
  password!: string;
  constructor() { }

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
}
