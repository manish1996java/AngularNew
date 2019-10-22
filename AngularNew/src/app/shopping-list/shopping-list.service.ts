import { Ingredient } from '../Models/ingredient.model';
import { EventEmitter, Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class ShoppingListSevice implements OnInit,OnDestroy{
    ingredientChange = new EventEmitter();
    onEditIngredient = new Subject();
    
    constructor(private http:HttpClient){}
    
    ngOnInit(){

    }
    
    getShoplistFrmSrv(){
        this.http.get("http://localhost:6200/api/shopings")
        .subscribe((shopinglist)=>{
            
        })
    }

    private ingredients:Ingredient[] = [];

    onAddIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChange.emit([...this.ingredients]);
    }
    getShoppingList(){
        return [...this.ingredients];
    }
    addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.onAddIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChange.emit([...this.ingredients]);
    }
    getEditedItem(index){
        return this.ingredients[index];
    }
    updateEditedItem(index:number,newIngredient:Ingredient){
        console.log(newIngredient,)
        this.ingredients[index] = newIngredient; 
        this.ingredientChange.emit([...this.ingredients]);
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChange.emit([...this.ingredients]);
    }

    ngOnDestroy(){}
}