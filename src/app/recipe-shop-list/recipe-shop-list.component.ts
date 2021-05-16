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

  constructor(private recipeShopListService: RecipeShopListService, private location: Location, private nav: AppComponent) { }

  ngOnInit() {
    this.recipeShopListService.getShopRecipeList().subscribe((data: any) => {
      this.recipeShopList = data;
    });

  }
  removeRecipe(recipe) {
    this.recipeShopListService.removeRecipe(recipe).subscribe((data: any) => {
      recipe = data;
    })
    this.ngOnInit();
    this.nav.ngOnInit();
  }

  goBack(): void {
    this.location.back();
  }
}
