import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Word } from './word';
// import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class WordsService {

  public headers: Headers;
  wordsUrl = 'http://localhost:3000/words';
  
  constructor(public http: HttpClient) {
   // this.headers = Headers();
    //this.headers.append('Content-Type', 'application/json');
  }

  getWords(): Observable<Word[]> {
    return this.http.get<Word[]>(this.wordsUrl);
  }
/*
  getWords() {
   // return this.http.get<Word[]>('http://localhost:3000/words');
    this.http.get('http://localhost:3000/words')
      .subscribe(data => {
        console.log(data);
      });
  }
/*
  /** POST: add a new word to the database */
  addWord(word) {
    const params = { name: 'test22', translate: 'prueba22' };
    this.http.post(this.wordsUrl, params).subscribe(res => { // * not callback
      console.log('addWord Success', {res});
    }, error => {
      console.log('Error', error);
    });
  }

  editWork(word) {
    this.http.put('http://localhost:3000/words/123',
        // { name: 'NewCustomer001', translate: 'Holas'}
        word)
        .subscribe(
            data => {
                console.log('PUT Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
  }
}
