import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeListService } from '../services/recipe-list.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  editRecipeForm: FormGroup;
  errors = null;
  id: any;
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private recipeListService: RecipeListService
  ) {
    this.editRecipeForm = this.fb.group({
      name: [''],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getRecipeData();
  }

  getRecipeData() {
    this.recipeListService.getRecipe(this.id).subscribe((data: any) => {
      this.recipe = data;
    })
  }

  updateRecipeData() {
    this.recipeListService.editRecipe(this.id, this.editRecipeForm.value).subscribe((data: any) => {
      this.recipe = data;
    })
    this.router.navigate(['/recipelist']);
  }

}
