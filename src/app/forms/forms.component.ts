import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  public listComidas: Array<{comida: string, preco: string}> = [
    {comida: "X -Salada", preco: "R$15,00"},
    {comida:"X -Bacon", preco: "R$17,00"},
    {comida:"Big casa", preco: "R$21,00"}
  ];
  }
