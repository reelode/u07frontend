import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../services/recipe-list.service';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

/* All saved recipes */
export class RecipeListComponent implements OnInit {

  recipeList: any;

  constructor(private recipeListService: RecipeListService, private location: Location, private nav: AppComponent) { }

  ngOnInit() {
    this.recipeListService.getRecipeList().subscribe((data: any) => {
      this.recipeList = data;
    });
  }

  removeRecipe(recipe) {
    this.recipeListService.removeRecipe(recipe).subscribe((data: any) => {
      recipe = data;
    })
    this.ngOnInit();
    this.nav.ngOnInit();
  }

  goBack(): void {
    this.location.back();
  }

}
