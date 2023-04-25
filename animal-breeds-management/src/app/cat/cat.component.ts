import { Component , OnInit} from '@angular/core';
import {  FormGroup, FormControl} from '@angular/forms';
import { BreedService } from '../services/breed.service';
import { Cat } from './cat.module';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit{

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
  cat: Cat[];

  constructor(private breedService: BreedService) {
    this.cat = [];
  }
  ngOnInit() {
    this.breedService.catgetBreeds().subscribe((data: Cat[]) => {
      this.cat = data;
    });

  }
  catgetBreeds() {
    this.breedService.catgetBreeds().subscribe((data: Cat[]) => {
      this.cat = data;
    });
  }

  deleteBreeds(id:any ){
    console.log(id);
    this.breedService.deleteBreeds(id).subscribe((res)=>{
      console.log(res);
      this.catgetBreeds();
    });
  }

}