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

  	constructor(public _http: HttpClient) {}
  
      getRegularVerbs(): Observable<Verb[]> {
        return this._http.get<Verb[]>('http://localhost:3000/verbs');
      }

      getIrregularVerbs(): Observable<Verb[]> {
      	return this._http.get<Verb[]>('http://localhost:3000/irregular_verbs');
      }

      getVerbsExamples(){
        return [{"id": 1,"infinitive": "arise", "past_simple": "arose", "past_participle": "arisen", "translate": "ejemplo"},
          {"id": 2,"infinitive": "arise", "past_simple": "arose", "past_participle": "arisen", "translate": "ejemplo"},
          {"id": 3,"infinitive": "arise", "past_simple": "arose", "past_participle": "arisen", "translate": "ejemplo"},
          {"id": 4,"infinitive": "arise", "past_simple": "arose", "past_participle": "arisen", "translate": "ejemplo"},
          {"id": 5,"infinitive": "arise", "past_simple": "arose", "past_participle": "arisen", "translate": "ejemplo"}];
      }

      /*
      getPruebaHttp(){
      	return this._http.get("https://jsonplaceholder.typicode.com/posts")
      		.map(res => res.json());
      }*/

}
