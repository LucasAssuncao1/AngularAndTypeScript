import { Component } from '@angular/core';

// Services
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrl: './food-add.component.scss'
})
export class FoodAddComponent {

  constructor(private foodListService: FoodListService){}

  public listAddItem(value: string){
    this.foodListService.foodListAdd(value);

  }


}
