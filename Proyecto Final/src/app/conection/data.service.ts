import { Injectable } from '@angular/core';
import { data_user, data_path} from './ModelInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url='http://ricardoeisaias.com'
  constructor(private http: HttpClient) { }
 //#region Usuarios
  login(cnjson:data_user):Observable<data_user>{
    return this.http.post<data_user>(this.url+"/user/login", cnjson);
  }
  signup(cnjson:data_user):Observable<data_user>{
    return this.http.post<data_user>(this.url+"/user", cnjson);
  }
  getprofile(iduser:string):Observable<data_user>{
    return this.http.get<data_user>(this.url+"/user/"+iduser);
  }
  getAll():Observable<data_user[]>{
    return this.http.get<data_user[]>(this.url+"/user/get/all");
  }
  updateUser(iduser:string, cnjson:data_user):Observable<data_user>{
    return this.http.patch<data_user>(this.url+"/user/"+iduser, cnjson);
  }
  deleteUser(iduser:string):Observable<data_user>{
    return this.http.delete<data_user>(this.url+"/user/"+iduser);
  }
  //#endregion

  //#region path
  uploadFile(file: File, iduser:string):Observable<any>{
    return this.http.post<any>(this.url+"/user/login/"+iduser, file);
  }
  getFile(iduser:string):Observable<data_user>{
    return this.http.get<data_user>(this.url+"/user/"+iduser);
  }
  getAllFiles():Observable<data_path[]>{
    return this.http.get<data_path[]>(this.url+"/user/get/all");
  }
  //#endregion
}
