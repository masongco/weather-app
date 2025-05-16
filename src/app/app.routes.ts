import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WeatherComponent } from './pages/weather/weather.component';

export const routes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: WelcomeComponent
  }
];
