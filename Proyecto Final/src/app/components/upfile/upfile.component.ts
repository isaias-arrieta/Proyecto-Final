import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/conection/data.service";

@Component({
  selector: 'app-upfile',
  templateUrl: './upfile.component.html',
  styleUrls: ['./upfile.component.scss']
})
export class UpfileComponent implements OnInit {
  title = 'fileUpload';

  multipleImages = [];

  constructor(private datasv: DataService) { }

  ngOnInit(): void {
  }
  selectMultipleImage(event: any){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }
  
  onMultipleSubmit(){
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img);
    }

    this.datasv.uploadFile(formData,"1").subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
