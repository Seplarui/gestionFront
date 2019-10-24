import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getHelloWorld() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const urlApi = 'http://localhost:3000/hola';
    return this.http.get(urlApi, { headers, responseType: 'text' });
  }

  getListEmpresas() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const urlApi = 'http://localhost:3000/api/empresa';
    // return this.http.get(urlApi, {headers, responseType: 'text'});
    return this.http.get(urlApi);
  }
}
