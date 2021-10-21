import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from "@angular/compiler";
import { MatDialog } from '@angular/material/dialog';
import { ModalRecucontraComponent } from '../modal-recucontra/modal-recucontra.component';
import { DataService } from "src/app/conection/data.service";
@Component({
  selector: 'app-uauth',
  templateUrl: './uauth.component.html',
  styleUrls: ['./uauth.component.scss']
})
export class UAuthComponent implements OnInit {

  username: string ="";
  password: string="";
  constructor(private dialogRef: MatDialog, private datasv: DataService) { }

  ngOnInit(): void {
  }

  LoginUser() {
console.log(this.username);
    if (this.username == "" || this.password == "") {
      alert("No se permiten espacios en blanco");
    }
    else {
       this.datasv.login({
        email: this.username,
        hash: this.password
      }).subscribe(data => {
        this.datasv.setToken(data.token);
      });
    }
  }

  openmodRC() {
    this.dialogRef.open(ModalRecucontraComponent);
  }
}
