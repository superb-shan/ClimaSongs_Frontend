import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private apiUrl = 'http://127.0.0.1:8000/api/songs/';

  constructor(private http: HttpClient) { }

  getSongsData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
