import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { BreedService } from '../services/breed.service';
import { Breeds } from './breeds.model';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  addData = new FormGroup({
    pet_name: new FormControl('pet_name'),
    average_life : new FormControl('average_life'),
    animal_type_id:new FormControl('animal_type_id'),
    average_size : new FormControl('average_size'),
    common_color: new FormControl('common_color'),
    hair_color : new FormControl('hair_color'),
    // pet_type : new FormControl('pet_type'),
    
  });
  constructor(private breedService: BreedService) {
    
  }

  postBreeds() {
    console.log(this.addData.value,"hy");
    this.breedService.postBreeds(this.addData.value).subscribe((res)=>{
      console.log(res);
    });
}



// createBreeds() {
//   console.log(this.addData.value,"hy");
//   this.breedService.createBreeds(this.addData.value).subscribe((res)=>{
//     console.log(res);
//   });
// }
}
