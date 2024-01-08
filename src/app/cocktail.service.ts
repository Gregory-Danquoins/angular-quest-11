import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktails.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}
  public getCocktails(): Cocktail[] {
    return [
      new Cocktail(
        'Bloody Mary',
        14,
        'https://www.villaschweppes.com/cdn-cgi/image/fit=cover,width=820,height=483/app/uploads/2019/01/23389-le-cocktail-blue-lemon-orig-2-scaled.jpg'
      ),

      new Cocktail(
        'Americano',
        18,
        'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_188424296.jpg'
      ),
      new Cocktail(
        'Mojito',
        8,
        'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_188424296.jpg'
      ),
    ];
  }
}
