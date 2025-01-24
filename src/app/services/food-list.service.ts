import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private foodList: Array<string> = [
    "Frango",
    "Ovo",
    "Carne",
    "Arroz"
  ]

  public getFoodList (){
    return this.foodList;
  }

  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.foodList.push(value);

  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }

  constructor() { }
}
