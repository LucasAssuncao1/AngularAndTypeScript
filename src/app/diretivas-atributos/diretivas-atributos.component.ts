import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrl: './diretivas-atributos.component.scss'
})
export class DiretivasAtributosComponent implements OnInit {

  constructor(){

  }

  public valor:boolean = true;
  public heigthPx:string = "20px";
  public backgroundColor: string = "red";

  public nome:string = "";
  public list: Array<{nome:string}> =[{nome:"Lucas Araujo" }];

  public date:Date = new Date();

  ngOnInit(): void {
    setInterval(()=> {
      if (this.valor){
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.heigthPx == "20px"){
        this.heigthPx = "50px";
        this.backgroundColor = "blue";
      } else {
        this.heigthPx = "20px";
        this.backgroundColor = "red";
      }

    }, 2000);
  }

  public salvar(){
    this.list.push({nome: this.nome});
    this.nome = "";
  }

}
