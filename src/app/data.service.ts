// src/app/data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:5000'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/all_items`);
  }
    getSongByTitle(title: string): Observable<any> {
      const url = `${this.apiUrl}/song_attributes/${title}`;
      return this.http.get<any>(url);
    }
}
