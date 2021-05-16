import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/interface';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private API_URL = 'https://api.spoonacular.com/recipes';
  private API_TOKEN = '68402c2b3f21410c8793db0c1381eb7a';

  constructor(private http: HttpClient) {
  }

  getRecipe(id) {
    return this.http.get<Recipe>(`${this.API_URL}/${id}/information?apiKey=${this.API_TOKEN}`)
  }

  getRecipeRandom(): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.API_URL}/random?number=5&apiKey=${this.API_TOKEN}`)
  }

  searchRecipes(query: string): Observable<Recipe[]> {
    const searchTerm = query;

    const url = `${this.API_URL}/complexSearch?apiKey=${this.API_TOKEN}&query=${searchTerm}&addRecipeInformation=true`;

    /* If search input empty, clear array of recipe items */
    if (!searchTerm.trim()) {
      return of([]);
    }

    return this.http.get<Recipe[]>(url)
      .pipe(
        map((response: any) => response.results),
      )
  }
}
