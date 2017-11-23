import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Orange', 1),
    new Ingredient('Tomatos', 10),
  ];

  ngOnInit() {
  }

}
