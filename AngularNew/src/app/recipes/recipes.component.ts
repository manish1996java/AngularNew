import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { RecipeModel } from '../Models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedrecpies:RecipeModel;
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeSelectd.subscribe((recipe:RecipeModel)=>{
        this.selectedrecpies = recipe;
    })
  }
}
