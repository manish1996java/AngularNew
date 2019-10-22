import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
import { ShoppingListSevice } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [];
  constructor(private shoppingListService:ShoppingListSevice) { console.log('shoppingListComponent constructor'); }

  ngOnInit() {
    console.log('shoppingListComponent onInit');
    this.ingredients = this.shoppingListService.getShoppingList();
    this.shoppingListService.ingredientChange.subscribe((ingredient:Ingredient[])=>{
      this.ingredients = ingredient;
    })
  }
  onEditIngredients(index:Number){
    this.shoppingListService.onEditIngredient.next(index);
  }
}
