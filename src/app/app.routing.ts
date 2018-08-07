import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

//Importar componentes
//import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { VerbsComponent } from './verbs/verbs.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [

	//Cuando la url no tenga nada
	//{ path: '', component: HomeComponent },

	//Ruta por error / defecto
	//{ path: '**', component: HomeComponent },


	{ path: 'words', component: WordsComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'verbs', component: VerbsComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);