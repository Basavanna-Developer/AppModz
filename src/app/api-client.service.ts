import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  HOST_NAME = "http://167.99.153.42:8080/petrolinkboot/";
  constructor(private httpClient:HttpClient) {
    
  }

  getJopOpenings():Observable<any>{
    return this.httpClient.get<any>(this.HOST_NAME+"petrolink/career").pipe();
  }

  applyJob(data:FormData):Observable<any>{
    return this.httpClient.post<any>(this.HOST_NAME+"petrolink/profile",data).pipe();
  }

  login(data):Observable<any>{
    return this.httpClient.post<any>(this.HOST_NAME+"petrolink/admin/user",data).pipe();
  }
}
