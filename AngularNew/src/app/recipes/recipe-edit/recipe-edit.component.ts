import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl} from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeModel } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeIndex:number;
  selectedRecipe:RecipeModel;
  recipeform:FormGroup;
  editMode:boolean;
  constructor(private route:ActivatedRoute, private recipeService:RecipesService) { }

  ngOnInit() {
    console.log('init run');
    this.route.params
    .subscribe((params:Params)=>{
        this.recipeIndex = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();  
    }) 
  }
  
  onSubmit(){
    console.log(this.recipeform);
  }
  private initForm(){
    console.log('init run');
    let name = '';
    let description = '';
    let imageurl = '';

    
    if(this.editMode){
      const recipe:RecipeModel = this.recipeService.getRecipe(this.recipeIndex);
      console.log(recipe);
      name = recipe.name;
      description = recipe.description;
      imageurl = recipe.imagepath;
    }
    this.recipeform = new FormGroup({
      'name': new FormControl(name),
      'imagePath': new FormControl(imageurl),
      'description': new FormControl(description),
    });
  }

  
}
