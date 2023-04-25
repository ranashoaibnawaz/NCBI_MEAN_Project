import { Component } from '@angular/core';
import { BreedService } from '../services/breed.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  a:any;
  constructor(private breedservice : BreedService){

  }
  // shared_func(){
  //   this.breedservice.api_fetch().subscribe((res)=>{
  //     console.log(res,"shoaib");
  //     this.a=res;
  //   })

  // }
}
