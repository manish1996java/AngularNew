import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/Models/ingredient.model';
import { RecipeModel } from 'src/app/Models/recipe.model';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // selectedrecipe:RecipeModel;
  // constructor(private recipeService:RecipesService) { }

  ngOnInit() {
     }
  
  // toShoppingList(){
  //   console.log(this.selectedrecipe.ingredients);
  //   this.recipeService.addIngredientToShoppingList(this.selectedrecipe.ingredients);
  // }
  // addRecipe(){

  // }
  // deleteRecipe(){

  // }

}
