import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  getCompanyList() {
    throw new Error("Method not implemented.");
  }
  private baseUrl='http://localhost:8020/CompanyRelated/companyrelated/';
 

  constructor(private http:HttpClient) { }
  getAllcompanies():Observable<any>{
    return this.http.get<any>(this.baseUrl+'getAllcompanies');
  }
  savecompany(companyrelated:Company):Observable<Company>{
    return this.http.post<Company>(this.baseUrl+'savecompany',companyrelated);
  } 
  updateCompany(companyName:String, value:Company):Observable<object>{
    return this.http.put<Company>(this.baseUrl+'updatecompany/{id}',companyName);
  }
  find(companyName:String):Observable<Company>{
    return this.http.get<Company>(this.baseUrl+'find/'+companyName);
  }

  delete(companyName:String):Observable<object>{
    
    return  this.http.delete<Company>(this.baseUrl+'delete/'+companyName);
   }
}
