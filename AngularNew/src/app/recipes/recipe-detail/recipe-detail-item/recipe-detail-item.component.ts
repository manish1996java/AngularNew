import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { RecipeModel } from 'src/app/Models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail-item',
  templateUrl: './recipe-detail-item.component.html',
  styleUrls: ['./recipe-detail-item.component.css']
})
export class RecipeDetailItemComponent implements OnInit {

  selectedrecipe:RecipeModel;
  id:number;

  constructor(private recipeService:RecipesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.selectedrecipe = this.recipeService.getRecipe(this.id);
    });

    // this.recipeService.recipeSelectd.subscribe(
    //   (selrecp)=>{
    //     this.selectedrecipe = selrecp;
    //   }
    // )
  }
  
  toShoppingList(){
    console.log(this.selectedrecipe.ingredients);
    this.recipeService.addIngredientToShoppingList(this.selectedrecipe.ingredients);
  }
  addEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    console.log(this.route);
  }
  deleteRecipe(){

  }

}
