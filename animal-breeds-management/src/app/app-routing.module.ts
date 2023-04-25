import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';
import { AddDataComponent } from './add-data/add-data.component';
import { CatComponent } from './cat/cat.component'
import { DogComponent } from './dog/dog.component';
import { BirdComponent } from './bird/bird.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'breeds',component:BreedsComponent},
  {path: 'addbreeds',component:AddDataComponent},
  {path: 'cat' , component:CatComponent},
  {path: 'dog' , component:DogComponent},
  {path: 'bird' , component:BirdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ BreedsComponent,AddDataComponent,CatComponent]
