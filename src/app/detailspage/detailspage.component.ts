import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.css'
})
export class DetailspageComponent {
  data: any;
  constructor (private dataService: DataService ) { 
    this.dataService.getJsonData().subscribe((res : any) =>{
      this.data = res;
     });
  }
}
