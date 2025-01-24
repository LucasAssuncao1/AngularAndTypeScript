import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit{

  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListService ){

  }

  ngOnInit(): void {
    this.foodList = this.foodListService.getFoodList();
    this.foodListService.emitEvent.subscribe(
      res => alert(`Olha você adicionou  >> ${res}`)
    );
  }
}
