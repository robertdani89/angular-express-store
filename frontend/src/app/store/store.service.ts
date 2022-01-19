import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rating, Store } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  endpoint = `${environment.apiUrl}/stores`;

  constructor(private http: HttpClient,) { }

  getStore(id: string): Observable<Store> {
    return this.http.get<Store>(`${this.endpoint}/${id}`)
  }

  postRating(id: string, rating: Rating): Observable<Store> {
    return this.http.post<Store>(`${this.endpoint}/${id}/comment`, rating)
  }
}
