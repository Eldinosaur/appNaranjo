import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Core } from '../models/core.model';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  url ='/api/core/'

  constructor(private http:HttpClient) { }

  loadCore():Observable<any> {
    return this.http.get(this.url)
  }

  addCore(core:Core):Observable<any>{
    return this.http.post(this.url,core)
  }

}
