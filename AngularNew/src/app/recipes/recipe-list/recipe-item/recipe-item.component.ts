import { Component, OnInit, Input} from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { RecipeModel } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:RecipeModel;
  @Input() index:number;
  constructor(private recipeService:RecipesService) { console.log(this.index);}

  ngOnInit() {
  }
  // selectedIng(){
  //   this.recipeService.recipeSelectd.emit(this.recipe);
  // }
  

}
