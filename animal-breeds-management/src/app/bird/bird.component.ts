import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl} from '@angular/forms';
import { BreedService } from '../services/breed.service';
import { Bird } from './bird.module';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit{
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

  bird: Bird[];

  constructor(private breedService: BreedService) {
    this.bird = [];
  }

  ngOnInit() {
    this.breedService.birdgetBreeds().subscribe((data: Bird[]) => {
      this.bird = data;
    });
  }

  birdgetBreeds() {
    this.breedService.birdgetBreeds().subscribe((data: Bird[]) => {
      this.bird = data;
    });
  }

  deleteBreeds(id:any ){
    console.log(id);
    this.breedService.deleteBreeds(id).subscribe((res)=>{
      console.log(res);
      this.birdgetBreeds();
    });
  }

}