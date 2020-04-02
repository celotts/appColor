import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getColor(nPage: number = 1) {
    console.log('lñkñkñkñkñkñkñ', nPage);
    return this.http.get(`${environment.apiUrl}${environment.service.colors.endpoint}?page=${nPage}`, this.headers);
  }
}
