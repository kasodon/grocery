import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelect(recipe: Recipe){
   this.theRecipe.emit(recipe); 
  }

}
