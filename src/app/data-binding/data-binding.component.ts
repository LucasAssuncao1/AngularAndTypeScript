import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent implements OnInit {

  public nome:string = "Lucas";

  public idade:number = 29;

  public maisUm:number = 1;

  public checkedDisabled: boolean = true;

  public imagem:string = "https://png.pngtree.com/thumb_back/fh260/background/20230605/pngtree-bright-colors-is-poured-into-a-black-background-image_2885679.jpg";
  public imagemAlt:string ="PROPERTY BINDING";


  constructor(){
  }

  ngOnInit (): void {}


  public position: {x:number , y:number } = {x:0 , y:0};

  public alertaInfo(valor:MouseEvent) {
    console.log(valor);
  }

  public mouseMoveFunction (valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;



  }

}
