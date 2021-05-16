import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { Recipe } from '../models/interface';
import { RecipeListService } from '../services/recipe-list.service';
import { RecipeService } from '../services/recipe.service';
import { AuthStateService } from '../shared/auth-state.service';


@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  recipesPaginate: any;
  recipesRandom: any;
  isSignedIn: boolean;

  private searchTerms$ = new Subject<string>();

  constructor(private recipeService: RecipeService, private recipeListService: RecipeListService, private auth: AuthStateService, private nav: AppComponent) {
    this.auth.userAuthState.subscribe(value => {
      this.isSignedIn = value;
    })
  }

  handleSearch(form): void {
    // format string to include checkboxes
    // console.log(form.value)
    let str = "";
    str += form.value.query;

    // first loop through types
    let startStrTypes = '&type='
    const originalLengthTypes = startStrTypes.length;
    for (let type in form.value.types) {
      if (form.value.types[type] === true) {
        startStrTypes += type + ",";
      }
    }
    if (startStrTypes.length !== originalLengthTypes) {
      str += startStrTypes //remove trailing comma or do something else
    }
    // loop through diet
    let startStrIntolerances = '&diet='
    const originalLengthIntolerances = startStrIntolerances.length;
    for (let i in form.value.intolerances) {
      if (form.value.intolerances[i] === true) {
        startStrIntolerances += i + ",";
      }
    }
    if (startStrIntolerances.length !== originalLengthIntolerances) {
      str += startStrIntolerances //remove trailing comma or do something else
    }

    this.searchTerms$.next(str) //change this to str, to get formatted string
  }

  addRecipeToList(recipe): void {
    recipe.count += 1;
    this.recipeListService.addRecipe(recipe).subscribe((data) => { recipe = data });
    this.nav.ngOnInit();
  }

  randomRecipes() {
    this.recipeService.getRecipeRandom().subscribe(recipes => {
      this.recipesRandom = recipes;
    });
  }

  ngOnInit(): void {
    this.recipes$ = this.searchTerms$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchValue => this.recipeService.searchRecipes(searchValue)),
      )
  }
}
