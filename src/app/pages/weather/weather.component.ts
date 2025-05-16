import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  forecast:any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const lat = 14.5995;
    const lon = 120.9842;

    this.weatherService.getForecast(lat, lon, 7).subscribe(data => {
      this.forecast = data;
      console.log(this.forecast);
    });
  }
}
