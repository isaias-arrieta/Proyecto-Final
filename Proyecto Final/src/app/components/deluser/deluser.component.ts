import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/conection/data.service";
@Component({
  selector: 'app-deluser',
  templateUrl: './deluser.component.html',
  styleUrls: ['./deluser.component.scss']
})
export class DeluserComponent implements OnInit {
  id:string = "";
  result:string="";
  constructor(private datasv: DataService) { }

  ngOnInit(): void {
  }
  deleteuser(){
    this.datasv.deleteUser(this.id).subscribe();
  }
}
