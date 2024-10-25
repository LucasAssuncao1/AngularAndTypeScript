import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrl: './diretivas-estruturais.component.scss'
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome:string, idade:number}> = [
    {nome: "Lucas", idade: 29},
    {nome: "Medeiros", idade: 24},
    {nome: "Vanderflinx", idade: 53}
  ];

  constructor(){}

  ngOnInit(): void {

    setInterval (() => {
      if(this.condition){
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public  onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAdd(){
    this.list.push({nome: "Eminem", idade:65});
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1);

  }

  public nome:string = 'Lucas';


}
