import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../models/tour';


@Injectable({
  providedIn: 'root'
})
export class TourService {
  private apiUrl = 'https://api.example.com/tours';

  constructor(private http: HttpClient) {}

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl);
  }

  getTour(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${id}`);
  }

  createTour(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(this.apiUrl, tour);
  }

  updateTour(tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${this.apiUrl}/${tour.n_idpro_proyecto}`, tour);
  }

  deleteTour(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
