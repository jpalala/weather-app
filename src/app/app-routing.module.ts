import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { AboutComponent } from './about/about.component';

const routes = [
  { path: '', component: WeatherComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
