import { Component, Input, OnInit } from '@angular/core';
import { RecipeShopListService } from '../services/recipe-shop-list.service';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-recipe-shop-list',
  templateUrl: './recipe-shop-list.component.html',
  styleUrls: ['./recipe-shop-list.component.css']
})
export class RecipeShopListComponent implements OnInit {

  recipeShopList: any;
  loader: boolean;

  constructor(private recipeShopListService: RecipeShopListService, private location: Location, private nav: AppComponent) { }

  ngOnInit() {
    this.loader = true;
    this.recipeShopListService.getShopRecipeList().subscribe((data: any) => {
      this.recipeShopList = data;
      this.loader = false;
    });
  }
  removeRecipe(recipe) {
    this.recipeShopListService.removeRecipe(recipe).subscribe({
      next: response => {
        recipe = response;
        this.ngOnInit();
        this.nav.ngOnInit();
      },
      error: error => {
        console.log(error)
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
