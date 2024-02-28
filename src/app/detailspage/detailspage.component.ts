import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.css'
})
export class DetailspageComponent implements OnInit {

  data: any;
  selectedJob:any;
  constructor (private dataService: DataService ) { 
    
     }
  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((res : any) =>{
      this.data = res;
     });
     this.dataService.selectedJob$.subscribe((job)=>{
      this.selectedJob = job;
     });
  }
  
     
  }

