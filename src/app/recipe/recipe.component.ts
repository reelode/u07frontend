import { Component, Input, OnInit } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
/* Recipe item in saved recipes */
export class RecipeComponent implements OnInit {
  @Input() recipeItem: any;
  recipeData: any;

  constructor(private recipeList: RecipeListComponent) { }

  ngOnInit() {
    this.recipeData = JSON.parse(this.recipeItem.data)
  }

  removeRecipe(recipe) {
    this.recipeList.removeRecipe(recipe);
  }

}