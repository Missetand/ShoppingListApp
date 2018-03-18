import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../_models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://previews.123rf.com/images/margouillat/margouillat1504/margouillat150400401/38471437-lasagna.jpg' ),
    new Recipe('A test recipe', 'This is simply a test', 'https://previews.123rf.com/images/margouillat/margouillat1504/margouillat150400401/38471437-lasagna.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
