import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisComponent } from './components/modal-regis/modal-regis.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto-Final';

  constructor(
    private dialogRef : MatDialog,
    private router: Router){

  }

  openDialog(){
    this.dialogRef.open(ModalRegisComponent);
  }

  gotomain(){
    this.router.navigate(['/mainpage'])
  }
}
