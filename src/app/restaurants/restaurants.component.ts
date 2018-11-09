import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  //declarando o servico no construtor e recebendo a instancia do framework
  constructor(private restaurantsService: RestaurantsService) { }

  //inicializa o componente
  ngOnInit() {
    this.restaurants = this.restaurantsService.restaurants();
  }

}
