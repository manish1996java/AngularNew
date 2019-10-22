import { Ingredient } from '../Models/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { RecipeModel } from '../Models/recipe.model';
import { ShoppingListSevice } from '../shopping-list/shopping-list.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { async, delay } from 'q';

@Injectable()
export class RecipesService{
    
    recipeUpdateFrSrv = new EventEmitter();
    recipeSelectd = new EventEmitter();
    private rs:RecipeModel[]= [
        new RecipeModel('pasta','pasta is so tasty','https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',[new Ingredient('coco',3),new Ingredient('momo',3)]),
        new RecipeModel('spring roll','spring roll is very tasty','https://www.whiskaffair.com/wp-content/uploads/2015/06/Spring-Roll-5-500x500.jpg',[new Ingredient('coco',3),new Ingredient('momo',3)]),
        new RecipeModel('burger','cheeze berger is so tasty','https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',[new Ingredient('coco',3),new Ingredient('momo',3)]),
        new RecipeModel('chicken','chicken leg is so tasty','https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_FRBZ19_6445_C01_31_3b.jpg',[new Ingredient('coco',3),new Ingredient('momo',3)]),
    ]                                     // demo recipe array delete after practicle

    private recipes:RecipeModel[] = [];

      constructor(private shoppingListService:ShoppingListSevice,private http:HttpClient){this.getRecipeFromSrv()}

    getRecipeFromSrv(){  
        this.http.get<{message:string,recipes:RecipeModel[]}>('http://localhost:6200/api/recipe').subscribe((data)=>{
            console.log(data.recipes);
            this.recipes = data.recipes;
           this.recipeUpdateFrSrv.emit(this.recipes);
        })
        // this.recipeUpdateFrSrv.emit(this.recipes);
    }

    getRecipe(index:number){
        // this.http.get<RecipeModel>("http://localhost:6200/api/recipe/"+id)
        // .subscribe((recipe)=>{
        //    console.log(recipe)
        // })
        return this.rs[index];
    }
    getRecipeList(){
        // this.http.get<RecipeModel[]>("http://localhost:6200/api/recipe/all")
        // .subscribe((recipelist)=>{
        //     this.recipes = recipelist
        // })          
        return [...this.recipes];
    }
    addIngredientToShoppingList(ingredient:Ingredient[]){
        this.shoppingListService.addIngredients(ingredient);
    }
    
}