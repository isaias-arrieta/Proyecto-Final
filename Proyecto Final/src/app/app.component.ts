import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisComponent } from './components/modal-regis/modal-regis.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto-Final';

  constructor(private dialogRef : MatDialog){

  }

  openDialog(){
    this.dialogRef.open(ModalRegisComponent);
  }
}
