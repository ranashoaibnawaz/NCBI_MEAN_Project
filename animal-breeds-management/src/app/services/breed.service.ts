import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breeds } from '../breeds/breeds.model';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  private apiUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(this.apiUrl);
  }

  catgetBreeds(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${this.apiUrl}/cat`);
  }

  doggetBreeds(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${this.apiUrl}/dog`);
  }

  birdgetBreeds(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${this.apiUrl}/bird`);
  }

  postBreeds(params:any){
    console.log(params,"Paramssssss")
    return this.http.post(`${this.apiUrl}/breeds`,params);
  }


  deleteBreeds(id:any){
    return this.http.delete(`${this.apiUrl}/breeds/${id}`);
  }

  putBreeds(id:any,addData:any){
    return this.http.put(`${this.apiUrl}/breeds/${id}`,addData);
  }
  
}