import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city = '';
  weatherData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.city = params.get('city') || '';
      if (this.city) {
        this.fetchWeather(this.city);
      }
    });
  }

  fetchWeather(city: string) {
    const apiKey = '0157fa90993f99883b5bf6c4d22cefa3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe({
      next: (data) => this.weatherData = data,
      error: (err) => console.error('Weather API error:', err)
    });
  }
}