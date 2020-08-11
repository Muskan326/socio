import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise'
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SociopoolService {

  private url='http://projectback.mywebapp.tech'

  constructor(private http:HttpClient) { }

  public saveDailyData(data){
       return this.http.post(this.url+"/dailydata",data)
  }

  public distance(data){
    return this.http.post(this.url+"/distance",data)
  }
}
