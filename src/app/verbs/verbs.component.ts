import { Component, OnInit } from '@angular/core';
import { VerbsService } from './verbs.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Verb } from './verb';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css'],
  providers: [VerbsService]
})

export class VerbsComponent implements OnInit {
	public regular_verbs = [];
  public _myService;


    // Darle valor a las propiedades
  	constructor(public servicio : VerbsService, public http: HttpClient) {
      this._myService = servicio;
      this._myService.getRegularVerbs().subscribe(data => this.regular_verbs = data);
      console.log("Regular verbs: " + this.regular_verbs);
  	}

    // Llamar metodos o hacer funcionalidades 
    ngOnInit(): void {
      console.log("Hooa");
    }

 

}
