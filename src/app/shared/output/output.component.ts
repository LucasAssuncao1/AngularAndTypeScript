import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  public list: Array<{nome: string, idade:number}> = [
  {nome: "Lucas", idade: 29},
  {nome: "Rosehaim", idade: 44},
  {nome: "Travis", idade: 35}
  ]

  @Output() public enviarDados =  new EventEmitter();

  public getDados(event:number){
    this.enviarDados.emit(this.list[event]);
  }

}


