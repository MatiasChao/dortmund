import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Phrase } from './phrase';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ExerciseService {

	constructor(public http: HttpClient) {}
  
    getPhrases(): Observable<Phrase[]> {
        return this.http.get<Phrase[]>('http://localhost:3000/phrases');
    }

}