import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-recucontra',
  templateUrl: './modal-recucontra.component.html',
  styleUrls: ['./modal-recucontra.component.scss']
})
export class ModalRecucontraComponent implements OnInit {

  constructor(private matDialog : MatDialog) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.matDialog.closeAll();
  }

}
