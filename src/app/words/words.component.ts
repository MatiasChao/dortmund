import { Component, OnInit } from '@angular/core';
import { WordsService } from './words.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Word } from './word';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
  providers: [WordsService]
})

export class WordsComponent implements OnInit {
	public words = [];
  productos: any[] = [];
  public matias:string;
  public _productService;

  	constructor(public servicio : WordsService, public http: HttpClient) {
  
      this._productService = servicio;
  	}

     ngOnInit(): void {
      this._productService.getWords().subscribe(data => this.words = data);
      console.log("Hola: " + this.words);
    }


}
