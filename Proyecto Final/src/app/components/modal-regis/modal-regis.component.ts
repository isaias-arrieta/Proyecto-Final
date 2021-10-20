import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-regis',
  templateUrl: './modal-regis.component.html',
  styleUrls: ['./modal-regis.component.scss']
})
export class ModalRegisComponent implements OnInit {


  constructor(public matDialog : MatDialog) { 
  }
  ngOnInit(): void {
  }

}
