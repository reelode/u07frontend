import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../models/interface';
import { RecipeService } from '../services/recipe.service';
import { RecipeListService } from '../services/recipe-list.service';
import { AuthStateService } from '../shared/auth-state.service';
import { AppComponent } from '../app.component';
import { RecipeShopListService } from '../services/recipe-shop-list.service';

@Component({
  selector: 'app-search-recipe-container',
  templateUrl: './search-recipe-container.component.html',
  styleUrls: ['./search-recipe-container.component.css']
})

/* Show single recipe  */

export class SearchRecipeContainerComponent implements OnInit {

  recipe: Recipe;
  isSignedIn: boolean;
  getUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private recipeListService: RecipeListService,
    private recipeShopListService: RecipeShopListService,
    private location: Location,
    private auth: AuthStateService,
    private nav: AppComponent
  ) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe(value => {
      this.isSignedIn = value;
    })
    const id = +this.route.snapshot.params.id;
    this.showRecipe(id);
    this.getUrl = this.router.url;
  }

  goBack(): void {
    this.location.back();
  }

  showRecipe(id) {
    this.recipeService.getRecipe(id).subscribe((results) => { this.recipe = results })
  }

  addRecipeToList(recipe) {
    recipe.count += 1;
    this.recipeListService.addRecipe(recipe).subscribe((data) => { recipe = data });
    this.nav.ngOnInit();
  }

  addRecipeToShoppingList(recipe) {
    recipe.count += 1;
    this.recipeShopListService.addRecipeToShopList(recipe).subscribe((data) => { recipe = data });
    this.nav.ngOnInit();
  }

}


