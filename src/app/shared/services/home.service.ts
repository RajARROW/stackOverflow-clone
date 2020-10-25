import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getQuesiton(page) {
    return this.http.get(`${environment.apiUrl}/questions/featured?sort=activity&page=${page}&pagesize=15`);
  }
}
