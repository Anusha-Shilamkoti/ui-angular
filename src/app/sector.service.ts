import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from './sector';

@Injectable({
  providedIn: 'root' 
}) 
export class SectorService {
  getSector() {
    throw new Error("Method not implemented.");
  }
  private baseUrl='http://localhost:8020/Sectors/sectors/';

  constructor(private http:HttpClient) { } 
  getAllsectors():Observable<any>{
    return this.http.get<any>(this.baseUrl+'getAllsectors');
  }
  saveSectors(sectors:Sector):Observable<Sector>{
    return this.http.post<Sector>(this.baseUrl+'savesectors',sectors);
  }
  updateSector(id:number, value:Sector):Observable<object>{
    return this.http.put<Sector>(this.baseUrl+'/updatesectors/{id}',id);
  }
  find(id:number):Observable<Sector>{
    return this.http.get<Sector>(this.baseUrl+'/find/'+id);
  }

  delete(id:number):Observable<object>{
    
    return  this.http.delete<Sector>(this.baseUrl+'/delete/'+id);
   }
} 
