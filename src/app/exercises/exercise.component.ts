import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  providers: [ExerciseService]
})

export class ExercisesComponent implements OnInit {

	public days = [];
	public checkDay = [];
  public checkDaysErrores = [];
  public inicializateCheckDay: boolean;
	public correctDay; incorrectDays;
	public phrases = [];
	public exerciseDays: boolean;

	public constructor(public _servicio : ExerciseService, public http: HttpClient){
		this.days = [{"id": 1, "day":"Monday", "dia":"Lunes"},
					{"id": 2, "day":"Tuesday", "dia":"Martes"},
					{"id": 3, "day":"Wednesday", "dia":"Miércoles"},
					{"id": 4, "day":"Thursday", "dia":"Jueves"},
					{"id": 5, "day":"Friday", "dia":"Viernes"},
					{"id": 6, "day":"Saturday", "dia":"Sábado"},
					{"id": 7, "day":"Sunday", "dia":"Domingo"}];	

      	this._servicio.getPhrases().subscribe(data => this.phrases = data);
      	this.exerciseDays = false;
        this.inicializateCheckDay = false;

	}

    // Llamar metodos o hacer funcionalidades 
    ngOnInit(): void {
      console.log(this.phrases);
    }

    correctDays(){ 
      this.inicializateCheckDay = true;
    	this.correctDay = 0; this.incorrectDays = 0;
    	for(var i = 0 ; i < this.days.length; i++){
			  if(this.days[i].day == this.checkDay[i]){
				  console.log("Son iguales");
          this.checkDaysErrores[i] = false;
			  } 
        else {
				  console.log("Son distintos");
          this.checkDaysErrores[i] = true;
			  }
    	}
    	console.log(this.checkDaysErrores);
    }

    showExeriseDays(){
    	if(this.exerciseDays) this.exerciseDays = false;
    	else this.exerciseDays = true;
    }
}