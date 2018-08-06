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
  public _myService;
  public checkWord = [];
  public incorrect:int;
  public correct:int;
  public showStatics:bool;
  public historyStatics:any[] = [];


    // Darle valor a las propiedades
  	constructor(public servicio : WordsService, public http: HttpClient) {
      this._myService = servicio;
      this._myService.getWords().subscribe(data => this.words = data);
      this.showStatics = false;
  	}

    // Llamar metodos o hacer funcionalidades 
    ngOnInit(): void {
      
    }

    helpWord(index){
      this.checkWord[index] = this.words[index].translate;
    }

    checkAll(){
      this.incorrect = 0;
      this.correct = 0;
      this.showStatics = true;
      for(var i = 0; i < this.words.length; i++){
        
        if(this.checkWord[i] == this.words[i].translate){
          //console.log("Correct: " + i + " -> " + this.checkWord[i] + " - " +  this.words[i].translate);
          this.correct++;
        }
        else {
          //console.log("Incorrect: " + i + " -> " + this.checkWord[i] + " - " +  this.words[i].translate); 
          this.incorrect++;
        }
      }
      this.historyStatics.push("Corrects: " + this.correct + " / Incorrects: " + this.incorrect);
      console.log(this.historyStatics);
    }

}
