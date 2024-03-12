import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  getJobs() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = './assets/data.json';


  constructor(private http: HttpClient) { }

  // getJobs(): Observable<any[]> {
  //   return this.http.get<any[]>('./assets/data.json');
  // }
}
