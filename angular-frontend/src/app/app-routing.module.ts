import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomRestaurantComponent } from './random-restaurant/random-restaurant.component';

const routes: Routes = [
  {path: 'random-restaurant', component: RandomRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
