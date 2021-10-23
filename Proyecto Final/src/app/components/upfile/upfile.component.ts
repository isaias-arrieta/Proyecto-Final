import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-upfile',
  templateUrl: './upfile.component.html',
  styleUrls: ['./upfile.component.scss']
})
export class UpfileComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.closeAll();
  }
}
