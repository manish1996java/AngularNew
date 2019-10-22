import { Component, OnInit, ViewChild, ElementRef, Output ,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Models/ingredient.model';
import { ShoppingListSevice } from '../shopping-list.service';
import { NgForm, Form } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameInput') name:ElementRef;
  // @ViewChild('decInput') description:ElementRef;
  // @ViewChild('amtInput') amt:ElementRef;
  constructor(private shoppingListService:ShoppingListSevice){}
  @ViewChild('f') form:NgForm;
  editedItemIndex:number;
  editedItem:Ingredient;
  editMode:Boolean=false;

  ngOnInit() {
    this.shoppingListService.onEditIngredient.subscribe((index:number)=>{
        this.editedItemIndex = index;
        this.editedItem=this.shoppingListService.getEditedItem(index);
        this.editMode = true;
        this.form.setValue({
          name: this.editedItem.name,
          amt: this.editedItem.amt
        })
    });
  }
  onDelete(){
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.form.resetForm();
      this.editMode = false;
  }
  onAdd(form:NgForm){
    const value = form.value;
    const newIgredient = new Ingredient(form.value.name,form.value.amt)
    if(this.editMode){ 
      this.shoppingListService.updateEditedItem(this.editedItemIndex ,newIgredient);
    }
    else{
      this.shoppingListService.onAddIngredient(newIgredient);
    }
    form.resetForm();
    this.editMode = false;
  }
  onClear(){
    this.editMode = false;
    this.form.resetForm();
  }
 

}
