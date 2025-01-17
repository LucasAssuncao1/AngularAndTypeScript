import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private foodList: Array<string> = [
    "Frango",
    "Ovo",
    "Carne",
    "Arroz"
  ]

  public getFoodList (){
    return this.foodList;
  }


  constructor() { }
}
