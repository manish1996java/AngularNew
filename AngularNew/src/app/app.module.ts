import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ShoppingListSevice } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailItemComponent } from './recipes/recipe-detail/recipe-detail-item/recipe-detail-item.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor} from './auth/auth-interceptor'





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeDetailItemComponent,
    RecipeEditComponent,
    SigninComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    
  ],
  providers: [ShoppingListSevice,RecipesService,AuthService,
    {provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
