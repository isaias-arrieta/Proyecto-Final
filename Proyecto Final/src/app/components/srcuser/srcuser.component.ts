import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisComponent } from '../modal-regis/modal-regis.component';
import { DeluserComponent } from '../deluser/deluser.component';

@Component({
  selector: 'app-srcuser',
  templateUrl: './srcuser.component.html',
  styleUrls: ['./srcuser.component.scss']
})
export class SrcuserComponent implements OnInit {

  constructor(private matDialog: MatDialog,
              private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.matDialog.closeAll();
  }

  openEditDialog(){
    this.dialogRef.open(ModalRegisComponent)
  }

  openDelDialog(){
    this.dialogRef.open(DeluserComponent);
  }

}
