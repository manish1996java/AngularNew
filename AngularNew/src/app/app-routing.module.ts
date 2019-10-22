import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailItemComponent } from './recipes/recipe-detail/recipe-detail-item/recipe-detail-item.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const appRoutes: Routes = [
  { path:'', redirectTo: '/recipes',pathMatch:"full"},
  { path:'signin', component: SigninComponent},
  { path:'signup', component: SignupComponent},
  { path:'recipes',component: RecipesComponent ,children:[
    { path:'', component: RecipeStartComponent},
    { path:'new',component: RecipeEditComponent},
    { path:':id', component: RecipeDetailItemComponent},
    { path:':id/edit',component: RecipeEditComponent},
  ]},
  { path:'shopping-list',component: ShoppingListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
