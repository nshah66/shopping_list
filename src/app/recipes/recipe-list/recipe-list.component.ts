import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('chole', 'this is recipe for tasty chole', 
    'https://cdn.pixabay.com/photo/2016/03/21/21/33/chana-masala-1271639_960_720.jpg'),
    new Recipe('biryani', 'this is recipe for tasty biryani',
    'https://static.pexels.com/photos/556558/pexels-photo-556558.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl: Recipe){
    this.recipeWasSelected.emit(recipeEl);
  }

}
