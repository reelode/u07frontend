import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeShopListComponent } from './recipe-shop-list/recipe-shop-list.component';
import { SearchRecipeContainerComponent } from './search-recipe-container/search-recipe-container.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';

const routes: Routes = [
  { path: '', component: SearchRecipeComponent },
  { path: 'recipe/:id', component: SearchRecipeContainerComponent },
  { path: 'recipelist/:id', component: EditRecipeComponent },
  { path: 'recipelist', component: RecipeListComponent },
  { path: 'recipeshoplist', component: RecipeShopListComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
