import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

//Importar componentes
//import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { VerbsComponent } from './verbs/verbs.component';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercise.component';

const appRoutes: Routes = [

	//Cuando la url no tenga nada
	//{ path: '', component: HomeComponent },

	//Ruta por error / defecto
	//{ path: '**', component: HomeComponent },

	// VER DONDE AGREGAR LOS HEADERS EN EL PROYECTO PARA QUE FUNCIONEN LAS PEGADAS LOCALES

	{ path: 'words', component: WordsComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'verbs', component: VerbsComponent },
	{ path: 'exercises', component: ExercisesComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);