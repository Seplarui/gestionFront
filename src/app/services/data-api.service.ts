import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  readonly headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  readonly urlApi = 'http://localhost:3000/hola';

  getHelloWorld() {
    return this.http.get(this.urlApi, { headers: this.headers, responseType: 'text' });
  }
}
