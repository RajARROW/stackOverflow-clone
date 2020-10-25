import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(id, page) {
    const userBasicDetails = this.http.get(`${environment.apiUrl}/users/${id}?sort=reputation`);
    const userTagDetails = this.http.get(`${environment.apiUrl}/users/${id}/tags?sort=popular`);
    const userAns = this.http.get(`${environment.apiUrl}/users/${id}/answers?sort=activity`);

    const userQuestion = this.http.get(`${environment.apiUrl}/users/${id}/questions?sort=activity&page=${page}&pagesize=15`);

    return forkJoin([userBasicDetails, userTagDetails, userQuestion, userAns]);
  }

  getAllUsers() {
    return this.http.get(`${environment.apiUrl}/users?sort=reputation`).pipe(map((res: any) => res.items));
  }
}
