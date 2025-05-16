import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = '0157fa90993f99883b5bf6c4d22cefa3';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily';

  constructor(private http: HttpClient) {}

  getForecast(lat: number, lon: number, days: number = 7): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&cnt=${days}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}