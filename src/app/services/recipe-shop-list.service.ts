import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeShopListService {

  constructor(private http: HttpClient, public authService: AuthService) {
    this.getShopRecipeList().subscribe((data: any) => {
      this.recipeShopList = data;
    });
  }
  recipeShopList;

  addRecipeToShopList(recipe) {
    const arrayRecipeShopData = {
      shop_recipe_id: recipe.id,
      name: recipe.title,
      data: JSON.stringify(recipe),
    }
    const result = this.recipeShopList.find(({ shop_recipe_id }) => shop_recipe_id === recipe.id);
    if (result) {
      alert('ALREADY IN YOUR SHOPPING LIST!')
    } else {
      alert('Added to your shopping list')
    }
    return this.http.post<any>('https://u08backendreelode.herokuapp.com/api/auth/myshoplist', arrayRecipeShopData);
  }

  getShopRecipe(id) {
    return this.http.get(`https://u08backendreelode.herokuapp.com/api/auth/myshoplist/${id}`);
  }

  getShopRecipeList() {
    return this.http.get<any>('https://u08backendreelode.herokuapp.com/api/auth/myshoplist')
  }

  removeRecipe(recipe) {
    return this.http.delete(`https://u08backendreelode.herokuapp.com/api/auth/myshoplist/${recipe.id}`);
  }

}
