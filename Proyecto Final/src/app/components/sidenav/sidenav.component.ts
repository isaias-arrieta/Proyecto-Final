import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpfileComponent } from '../upfile/upfile.component';
import { DeluserComponent } from '../deluser/deluser.component';
import { ModalRegisComponent } from '../modal-regis/modal-regis.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class sidenavComponent implements OnInit {

  constructor(private dialogRef : MatDialog) {}

  ngOnInit(): void {
  }

  opened = false;

  openDialog2(){
    this.dialogRef.open(UpfileComponent);
  }

  openEditDialog(){
    this.dialogRef.open(ModalRegisComponent)
  }

  openDelDialog(){
    this.dialogRef.open(DeluserComponent);
  }
  
}
