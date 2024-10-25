import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

 @Input() public title:string = "Bem vindo!!";

  constructor(){}

  ngOnDestroy(): void {
    console.log("Componente Destruido");

  }

  ngOnChanges(): void {
  }
  ngOnInit(): void {}


}
