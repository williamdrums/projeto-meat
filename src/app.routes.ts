import { Routes } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestaurantsComponent } from "app/restaurants/restaurants.component";
import { RestaurantDetailComponent } from "app/restaurant-detail/restaurant-detail.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },//quando for encontrado a url com o nome about ele vai para o about
    { path: 'restaurants/:id', component: RestaurantDetailComponent },
    { path: 'restaurants', component: RestaurantsComponent }
];