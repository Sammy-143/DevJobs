import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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

  viewSingleJob(){
    this.router.navigate(['/details']);
  }


}