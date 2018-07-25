import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Word } from './word';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class WordsService {

  	constructor(public http: HttpClient) {}
  
      getWords(): Observable<Word[]> {
        return this.http.get<Word[]>('http://localhost:3000/words');
      }

}
