import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WordsComponent } from './words/words.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
