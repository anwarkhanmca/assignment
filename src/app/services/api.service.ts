import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'http://anwarkhan.com';
  httpOptions: any;

  constructor(private http: HttpClient) { }

  getHttpHeaders() {
    let options: any = {
      'Content-Type': 'application/json',
    };
    this.httpOptions = {
      headers: new HttpHeaders(options)
    };
    return this.httpOptions;
  }

  sendData(data: any): Observable<any> {
    let body = JSON.stringify(data);
    return this.http.post(this.apiUrl, body, this.getHttpHeaders());
  }
}
