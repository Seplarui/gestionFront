import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

/*   headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Headers':'Content-Type',
      'Access-Control-Allow-Origin':'*'
    });*/

readonly httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


  getHelloWorld() {
    const url_api = 'http://localhost:3000/';
    
    console.log("Cabeceras: ");
    return this.http.get(url_api, this.httpOptions);
  }
}
