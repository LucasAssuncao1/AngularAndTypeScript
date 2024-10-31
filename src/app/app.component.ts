import { Component, OnInit } from '@angular/core';

/*
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
*/

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public addValue:number = 1;

  public add(){
    this.addValue ++;
  }

  constructor(){
  }

  ngOnInit(): void {}

}
