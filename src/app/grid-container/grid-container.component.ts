import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.css'
})
export class GridContainerComponent {
  data: any;

  constructor (private dataService: DataService, private router: Router ) { 
    this.dataService.getJsonData().subscribe((res : any) =>{
      this.data = res;
     });
  }

  onCardClick(job: any){
    this.router.navigate(['/details']);
    console.log(job.id)
  }
  
 
 


}