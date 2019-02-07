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
  styleUrls: ['./words.component.scss'],
  providers: [WordsService]
})

export class WordsComponent implements OnInit {
  public words = [];
  public _myService;
  public checkWord = [];
  public incorrect: number;
  public correct: number;
  public showStatics: boolean;
  public historyStatics: any[] = [];
  public wordsFailed: string[] = [];
  public colorCheckList = [];
  public findWord: string;
  public name: string;
  public translate: string;
  public foundWord: boolean;
  public addName: string;
  public addTranslate: string;


  // Darle valor a las propiedades
  constructor(public servicio: WordsService, public http: HttpClient) {
    this._myService = servicio;
    this._myService.getWords().subscribe(
       data => this.words = data);
      /* resukt.code me trae undefined
      result => {
        if (result.code !== 200) {
            console.log(result.code);
            console.log(result);
        } else {
            this.words = result.data;
        }
    },
    error => {
        console.log(<any>error);
    }
    */
    this.showStatics = false;
    // this.foundWord = false;
    this.addName = '';
    this.addTranslate = '';
  }

    // Llamar metodos o hacer funcionalidades
    ngOnInit(): void {
      // this._myService.editWork();
      // this.addWord();
    }

    helpWord(index) {
      this.checkWord[index] = this.words[index].name;
    }

    checkAll() {
      // this.historyStatics = null;
      this.wordsFailed = []; // clean
      this.incorrect = 0;
      this.correct = 0;
      this.showStatics = true;
      this.colorCheckList = [];
      for (let i = 0; i < this.words.length; i++) {
        // console.log("Correct: " + i + " -> " + this.checkWord[i] + " - " +  this.words[i].translate);
        if (this.checkWord[i] === this.words[i].name) {
          // alert("HOLA");
          // console.log("Correct: " + i + " -> " + this.checkWord[i] + " - " +  this.words[i].translate);
          this.correct++;
          this.colorCheckList[i] = 'green';

          this.words[i].validate = true;
          console.log('Validado: ' + this.words[i].validate);
        } else {
          // console.log("Incorrect: " + i + " -> " + this.checkWord[i] + " - " +  this.words[i].translate);
          this.incorrect++;
          // this.wordsFailed.push('Lo ingresado: ' + this.checkWord[i] + ' lo esperado: ' + this.words[i].translate);
          this.colorCheckList[i] = 'red';
          this.words[i].validate = false;
        }
      }
      this.historyStatics.push('Corrects: ' + this.correct + ' / Incorrects: ' + this.incorrect);
      console.log(this.words);
      console.log('Words failed: ' + this.colorCheckList);

      // this.addStaticsWord(this.historyStatics);
    }

    // addStaticsWord(historyStatics) {
      
    // }

    searchWord(word) {
      this.foundWord = true;
      this.translate = '';
      this.name = '';
      for (let i = 0; i < this.words.length; i++) {
        if (this.words[i].name === word) {
           this.translate = this.words[i].translate;
           this.name = this.words[i].name;
           this.foundWord = false;
        }
      }
    }

    addWord() {
      this._myService.addWord();
    }
    /*
    addWord(name, translate) {
      console.log('name: ' + name + ' translate: ' + translate);
      if (name === '' && translate === '') {
        console.log('is incorrect');
      } else {
        console.log('is correct');
      }
    }
    */
    

}
