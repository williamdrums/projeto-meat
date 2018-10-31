import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  //@input aceita que um component parent possa passar algum dado pra propriedade
  @Input() restaurant: Restaurant;


  constructor() { }

  ngOnInit() {
  }

}
