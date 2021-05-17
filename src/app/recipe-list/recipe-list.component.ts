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
  loader: boolean;

  constructor(private recipeListService: RecipeListService, private location: Location, private nav: AppComponent) { }

  ngOnInit() {
    this.loader = true;
    this.recipeListService.getRecipeList().subscribe((data: any) => {
      this.recipeList = data;
      this.loader = false;
    });
  }

  removeRecipe(recipe) {
    this.recipeListService.removeRecipe(recipe).subscribe({
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
