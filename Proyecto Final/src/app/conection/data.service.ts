
import { Injectable } from '@angular/core';
import { data_user, data_user2, data_path, data_login} from './ModelInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url='http://localhost:3000'
  constructor(private http: HttpClient,
    private cookies: CookieService) { }
    
 headers = new HttpHeaders().set('Content-Type', 'application/json');

 currentUser: data_user2 = {
  id: "",
  name:"",
  middleName:"",
  LastName:"",
  email:"",
  hash:"",
  administrator:""
 };
 options = {
  headers: {'jwt': this.getToken()}
};
 //#region Usuarios
  login(cnjson:data_login):Observable<any>{
    return this.http.post<data_login>(this.url+"/user/login", cnjson);
  }
  signup(cnjson:data_user):Observable<any>{
    return this.http.post<data_user>(this.url+"/user", cnjson);
  }
  getprofile(iduser:string):Observable<data_user>{
    return this.http.get<data_user>(this.url+"/user/"+iduser, { headers: this.headers });
  }
  getAll():Observable<data_user[]>{
    return this.http.get<data_user[]>(this.url+"/user/get/all",{ headers: this.headers });
  }
  updateUser(iduser:string, cnjson:data_user):Observable<data_user>{
    return this.http.patch<data_user>(this.url+"/user/"+iduser, cnjson, { headers: this.headers });
  }
  deleteUser(iduser:string):Observable<data_user>{
    return this.http.delete<data_user>(this.url+"/userAuth/delete/"+iduser, { headers: this.headers });
  }
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  //#endregion

  //#region path
  uploadFile(files: FormData, iduser:string):Observable<any>{
    return this.http.post<any>(this.url+"/path/upload/"+iduser, files, this.options);
  }
  getFile(iduser:string):Observable<data_path>{
    return this.http.get<data_path>(this.url+"/path/"+iduser, { headers: this.headers });
  }
  getAllFiles():Observable<data_path[]>{
    return this.http.get<data_path[]>(this.url+"/path/get/all", { headers: this.headers });
  }
  //#endregion
}