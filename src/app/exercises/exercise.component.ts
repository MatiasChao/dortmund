import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercise.component.html',
  //styleUrls: ['./verbs.component.css'],
  providers: []
})

export class ExercisesComponent implements OnInit {

	public days = [];


	public constructor(){
		this.days = ["Monday", "Thuesday", "Wednesday", "Tuersday", "Friday", "Saturday", "Sunday"];
	}

	
	// Llamar metodos o hacer funcionalidades 
    ngOnInit(){

    }
}