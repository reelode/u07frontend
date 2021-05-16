import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const storageName = 'recipe_storage_list'
const thisList = []

@Injectable({
  providedIn: 'root'
})

export class RecipeListStorageService {

  private recipeList;

  constructor(private http: HttpClient) {
    this.recipeList = JSON.parse(localStorage.getItem(storageName)) || thisList;
  }

  get() {
    return this.recipeList;
  }

  post(recipe) {
    //this.list = list;
    let formData: any = new FormData();
    formData.append("name", recipe);
    return this.http.post('https://u08backendreelode.herokuapp.com/api/auth/mylist', formData);
  }

  put(recipe, changes) {
    Object.assign(this.recipeList[this.findItemIndex(recipe)], changes);
    return this.update();
  }

  destroy(item) {
    // console.log(this.recipeList)
    this.recipeList.splice(this.findItemIndex(item), 1);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.recipeList));
    return this.get();
  }

  private findItemIndex(recipe) {
    return this.recipeList.indexOf(recipe)
  }










}
