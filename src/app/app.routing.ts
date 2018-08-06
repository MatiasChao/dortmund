import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

//Importar componentes
import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [

	//Cuando la url no tenga nada
	{path: '', component: AppComponent},

	//Ruta por error / defecto
	{path: '**', component: AppComponent},


	{path: 'words', component: WordsComponent},
	{path: 'home', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);