import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreedsComponent } from './breeds/breeds.component';
import { AddDataComponent } from './add-data/add-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { BirdComponent } from './bird/bird.component';
// Define your routes here


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreedsComponent,
    routingComponents,
    AddDataComponent,
    CatComponent,
    DogComponent,
    BirdComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
