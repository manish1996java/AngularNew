import { Component, OnInit} from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipeModel } from 'src/app/Models/recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:RecipeModel[] = [];

  constructor(private recipeService:RecipesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipeList();
    this.recipeService.recipeUpdateFrSrv.subscribe((recipes)=>{
      this.recipes = recipes;
    })
    console.log(this.recipes);
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
