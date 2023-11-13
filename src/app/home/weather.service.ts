import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://127.0.0.1:8000/api/weather/';

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
