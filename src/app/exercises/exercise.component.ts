import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercise.component.html',
  //styleUrls: ['./verbs.component.css'],
  providers: [ExerciseService]
})

export class ExercisesComponent implements OnInit {

	public days = [];
	public checkDay = [];
	public correctDay; incorrectDays;

	public constructor(){
		this.days = [{"id": 1, "day":"Monday", "dia":"Lunes"},
					{"id": 2, "day":"Tuesday", "dia":"Martes"},
					{"id": 3, "day":"Wednesday", "dia":"Miércoles"},
					{"id": 4, "day":"Thursday", "dia":"Jueves"},
					{"id": 5, "day":"Friday", "dia":"Viernes"},
					{"id": 6, "day":"Saturday", "dia":"Sábado"},
					{"id": 7, "day":"Sunday", "dia":"Domingo"}];		
	}

	
	// Llamar metodos o hacer funcionalidades 
    ngOnInit(){

    }

    correctDays(){
    	this.correctDay = 0; this.incorrectDays = 0;
    	for(var i = 0 ; i < this.days.length; i++){
			if(this.days[i].dia == this.checkDay[i]){
				console.log("Son iguales");
			} else {
				console.log("Son distintos");
			}
    	}
    	//console.log(this.checkDay);
    }
}