import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HouseService } from '../service/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
//('bedrooms', 'bathrooms', 'sqft_lot', 'floors', 'waterfront', 'sqft_above', 'sqft_basement')
  model: any ={
    bedrooms:"",
    bathrooms:"",
    sqt_loft:"",
    floors:"",
    waterfront:"",
    sqft_above:"",
    sqft_basement:""
  }
  priceForHouse: any = {};
  submitted: boolean = false;
  constructor(private myService: HouseService) { 
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.model.waterfront == 'Yes')
    {
      this.model.waterfront = 1;
    }
    else{
      this.model.waterfront = 0;

    }
    this.myService.checkHouse(this.model).subscribe((res : any) => {
      this.priceForHouse = res;
      this.submitted = true;

  })
  }
}
