import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
import { RecipeListService } from './services/recipe-list.service';
import { RecipeShopListService } from './services/recipe-shop-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'u07';
  isSignedIn: boolean;

  recipeList;
  recipeShopList;

  constructor(
    private recipeListService: RecipeListService,
    private recipeShopListService: RecipeShopListService,
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
  ) {
  }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });
    this.recipeListService.getRecipeList().subscribe((data: any) => {
      this.recipeList = data;
    });
    this.recipeShopListService.getShopRecipeList().subscribe((data: any) => {
      this.recipeShopList = data;
    });
  }

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}


