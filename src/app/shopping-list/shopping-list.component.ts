import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredients: Ingredient[] = [
    new Ingredient('siriora cut food', 200),
    new Ingredient('Onion', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(ingredient: Ingredient){
    this.Ingredients.push(ingredient);
  }

}
