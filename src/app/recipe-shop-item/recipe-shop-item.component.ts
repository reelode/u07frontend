import { Component, Input, OnInit } from '@angular/core';
import { RecipeShopListComponent } from '../recipe-shop-list/recipe-shop-list.component';

@Component({
  selector: 'app-recipe-shop-item',
  templateUrl: './recipe-shop-item.component.html',
  styleUrls: ['./recipe-shop-item.component.css']
})
export class RecipeShopItemComponent implements OnInit {
  @Input() recipeItem: any;
  recipeData: any;

  constructor(private recipeShopListItem: RecipeShopListComponent) { }

  ngOnInit() {
    this.recipeData = JSON.parse(this.recipeItem.data)
  }

  removeRecipe(recipe) {
    this.recipeShopListItem.removeRecipe(recipe);
  }

}
