import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8020/User/Userportal';

  constructor(private http: HttpClient) { }
  getAllusers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getAllusers');
  }
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/saveUser', user);
  }
  updateUser(id: number, value: User): Observable<object> {
    return this.http.put<User>(this.baseUrl + '/updateUser/{id}', id);
  }
  find(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/find/' + id);
  }
  findByUserNameAndPassword(userName: String, password: String): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/findByUserNameAndPassword/' + userName + '/' + password);
  }

  uploadFile( file: File , id : number ) : Observable<any>  
  {  
    let url = this.baseUrl + "uploadImage/" + id ;  
  
    const formdata: FormData = new FormData();  
    
    formdata.append('file', file);  
   
    return this.http.post(url , formdata);  
  } 

  delete(id: number): Observable<object> {

    return this.http.delete<User>(this.baseUrl + '/delete/' + id);
  }

}
