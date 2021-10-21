import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/conection/data.service";
@Component({
  selector: 'app-modal-regis',
  templateUrl: './modal-regis.component.html',
  styleUrls: ['./modal-regis.component.scss']
})
export class ModalRegisComponent implements OnInit {
  Nombre: string="";
  SNombre: string="";
  Apellido: string="";
  Correo: string="";
  Contra: string="";
  
  constructor(private datasv: DataService) { 
  }
  

  ngOnInit(): void {
    if(this.Nombre=="" || this.Apellido=="" || this.Correo=="" || this.Contra==""){
      alert("No se permiten espacios en blanco");
    }else{
      this.datasv.signup({
        name: this.Nombre,
        middleName: this.SNombre,
        LastName: this.Apellido,
        email: this.Correo,
        hash: this.Contra,
        administrator: "false"
      }).subscribe(data => {
        this.datasv.setToken(data.token);
      });
    }
  }
  
}
