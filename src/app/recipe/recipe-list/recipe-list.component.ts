import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test description', 'https://whereismyspoon.co/wp-content/uploads/2018/07/jollof-rice-3.jpg'),
    new Recipe('Jollof Rice', 'The Best Party Jollof Rice Recipe You Can’t Resist', 'https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-recipe_.jpg')
  ];

  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe){
   this.theRecipe.emit(recipe); 
  }

}
