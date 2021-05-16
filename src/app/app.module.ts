import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from './shared/auth.interceptor';
import { NgxPrintModule } from 'ngx-print';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { SearchRecipeContainerComponent } from './search-recipe-container/search-recipe-container.component';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListService } from './services/recipe-list.service';
import { RecipeListStorageService } from './services/recipe-list-storage.service';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeShopListComponent } from './recipe-shop-list/recipe-shop-list.component';
import { RecipeShopItemComponent } from './recipe-shop-item/recipe-shop-item.component';

@NgModule({
  providers: [
    RecipeListService, RecipeListStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: [
    AppComponent,
    SearchRecipeComponent,
    SearchRecipeContainerComponent,
    RecipeListComponent,
    RecipeComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    EditRecipeComponent,
    RecipeShopListComponent,
    RecipeShopItemComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
