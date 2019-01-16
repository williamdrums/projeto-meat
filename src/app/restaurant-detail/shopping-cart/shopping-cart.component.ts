import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(){
    return this.shoppingCartService.items; //passando o array do carrinho de compra
  }
  total(): number{
 return this.shoppingCartService.total();// retorna o total do carrinho de compra 
  }
}
