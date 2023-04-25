import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl} from '@angular/forms';
import { BreedService } from '../services/breed.service';
import { Dog } from './dog.module';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  showInput: boolean = false;
  addData = new FormGroup({
    pet_name: new FormControl('pet_name'),
    average_life : new FormControl('average_life'),
    animal_type_id:new FormControl('animal_type_id'),
    average_size : new FormControl('average_size'),
    common_color: new FormControl('common_color'),
    hair_color : new FormControl('hair_color'),
  });

  showInputField() {
    this.showInput = true;
  }

  dog:Dog[];

  constructor(private breedService: BreedService) {
    this.dog = [];
  }

  ngOnInit() {
    this.breedService.doggetBreeds().subscribe((data: Dog[]) => {
      this.dog = data;
    });

  }
  doggetBreeds() {
    this.breedService.catgetBreeds().subscribe((data: Dog[]) => {
      this.dog = data;
    });
  }

  deleteBreeds(id:any ){
    console.log(id);
    this.breedService.deleteBreeds(id).subscribe((res)=>{
      console.log(res);
      this.doggetBreeds();
    });
  }

}