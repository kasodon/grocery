import { Recipe } from '../recipe/recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is just a test description', 'https://whereismyspoon.co/wp-content/uploads/2018/07/jollof-rice-3.jpg'),
        new Recipe('Jollof Rice', 'The Best Party Jollof Rice Recipe You Can’t Resist', 'https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-recipe_.jpg')
      ]; 

      getRecipes(){
          return this.recipes.slice();
      }
}

