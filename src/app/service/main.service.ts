import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Request,
  Response,
  RequestOptions,
  RequestOptionsArgs
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainService {

  constructor(private http: Http) { }

  //  getData(){
  //  // return this.http.get(url).map((res) => res.json());
  //  this.http.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=9217642749764be796f284c90f320754').subscribe((res) => {console.log(res)});
  // }
  
 getData(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(url, options).map((res) => res.json());
  }
}
