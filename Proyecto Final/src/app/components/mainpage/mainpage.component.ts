import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/conection/data.service';
import {data_user, data_path} from '../../conection/ModelInterface'
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  userslist!: data_user[];
  imageList!: data_path[];
  @Input() parentData:data_path[]  = [];

  @Input("data") modifiedName:data_path[]  = [];
  constructor(private datasv: DataService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  deleteFile(id:string){
    if (confirm('¿Desea eliminar este archivo?')) {
     this.datasv.deleteFile(id).subscribe();
     
    } else {

    }
  }
  getAllUsers() {  
      this.datasv.getAllFiles().subscribe((data) => (this.imageList = data));   
  }
}
