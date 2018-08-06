import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Verb } from './verb';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class VerbsService {

  	constructor(public http: HttpClient) {}
  
      getRegularVerbs(): Observable<Verb[]> {
        return this.http.get<Verb[]>('http://localhost:3000/verbs');
      }

}
