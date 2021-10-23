import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-deluser',
  templateUrl: './deluser.component.html',
  styleUrls: ['./deluser.component.scss']
})
export class DeluserComponent implements OnInit {

  constructor(private dialogRef: MatDialog ) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.closeAll();
  }
}
