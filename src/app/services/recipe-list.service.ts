import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  constructor(private http: HttpClient, public authService: AuthService) {
    this.getRecipeList().subscribe((data: any) => {
      this.recipeList = data;
    });
  }
  recipeList;

  addRecipe(recipe) {
    const arrayRecipeData = {
      recipe_id: recipe.id,
      name: recipe.title,
      data: JSON.stringify(recipe),
    }
    const result = this.recipeList.find(({ recipe_id }) => recipe_id === recipe.id);
    if (result) {
      alert('ALREADY IN YOUR LIST!')
    } else {
      alert('Added to your list')
    }
    return this.http.post<any>('https://u08backendreelode.herokuapp.com/api/auth/mylist', arrayRecipeData);
  }

  getRecipe(id) {
    return this.http.get(`https://u08backendreelode.herokuapp.com/api/auth/mylist/${id}`);
  }

  editRecipe(id, data) {
    return this.http.put(`https://u08backendreelode.herokuapp.com/api/auth/mylist/${id}`, data);
  }

  getRecipeList() {
    return this.http.get<any>('https://u08backendreelode.herokuapp.com/api/auth/mylist')
  }

  removeRecipe(recipe) {
    return this.http.delete(`https://u08backendreelode.herokuapp.com/api/auth/mylist/${recipe.id}`);
  }

}