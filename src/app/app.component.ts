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

  public getDados: {nome:string , idade:number} | undefined;

  public setDados (event: any){
    this.getDados = event;
  }

  public add(){
    this.addValue ++;
  }

  constructor(){
  }

  ngOnInit(): void {}

}
