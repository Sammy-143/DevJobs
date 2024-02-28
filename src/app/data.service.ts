import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private dataSubject = new BehaviorSubject<any>(null);
  public selectedJob$: Observable<any> = this.dataSubject.asObservable();

  setSelectedJob(job: any): void{
    this.dataSubject.next(job)
  }

  constructor(private http: HttpClient) {}
   getJsonData(){
    return this.http.get('./assets/data.json');
   }

}
