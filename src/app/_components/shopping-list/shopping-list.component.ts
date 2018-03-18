import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../_models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananna', 3)
  ];

  constructor() { }

  ngOnInit() {
  }

}
