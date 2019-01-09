import { Routes } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestaurantsComponent } from "app/restaurants/restaurants.component";
import { RestaurantDetailComponent } from "app/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "app/restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "app/restaurant-detail/reviews/reviews.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },//quando for encontrado a url com o nome about ele vai para o about
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        //add rota filhas para navegacão do menu e avaliacoes
        children: [
            {path: '',redirectTo: 'menu', pathMatch: 'full'},
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },

];