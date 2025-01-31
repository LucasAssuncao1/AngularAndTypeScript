import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';
import { FoodList } from '../../module/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit{

  public foodList : Array<FoodList> = [];

  constructor(private foodListService: FoodListService ){

  }

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe(
      res => this.foodList = res,
      error => error
    );


    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`você adicionou  >> ${res.nome}`);
        return this.foodList.push(res);
      }
    );
  }

  public foodListDelete(id: number){
    this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error

    )
  }

  public foodListEdit(value: string, id: number){
    this.foodListService.foodListEdit(value, id).subscribe(
      res => {
        return console.log(res)
      },
      error => error



    )


  }

}
