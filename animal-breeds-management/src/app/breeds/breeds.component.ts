import { Component, OnInit,Input } from '@angular/core';
import { BreedService } from '../services/breed.service';
import { Breeds } from './breeds.model';
import {  FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-breed',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  
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
  
  breeds: Breeds[];

  constructor(private breedService: BreedService) {
    this.breeds = [];
  }

  ngOnInit() {
    this.breedService.getBreeds().subscribe((data: Breeds[]) => {
      this.breeds = data;
    });
  }
  getBreeds() {
    this.breedService.getBreeds().subscribe((data: Breeds[]) => {
      this.breeds = data;
    });
  }

  deleteBreeds(id:any ){
    console.log(id);
    this.breedService.deleteBreeds(id).subscribe((res)=>{
      console.log(res);
      this.getBreeds();
    });
  }

  putBreeds(id: number) {
    const breedData = this.addData.value;
    this.breedService.putBreeds(id, breedData).subscribe(() => {
      this.getBreeds();
    });
  }

}
