// data.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject = new BehaviorSubject<any>(null);
  private themeSubject = new BehaviorSubject<string>('light');

  public selectedJob$: Observable<any> = this.dataSubject.asObservable();
  public currentTheme$: Observable<string> = this.themeSubject.asObservable();

  setSelectedJob(job: any): void {
    this.dataSubject.next(job);
  }

  setTheme(theme: string): void {
    this.themeSubject.next(theme);
  }

  constructor(private http: HttpClient) {}

  getJsonData() {
    return this.http.get('./assets/data.json');
  }
}
