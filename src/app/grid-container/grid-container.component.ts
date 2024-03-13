import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { JobService } from '../job.service';
import { Jobs } from '../jobs';



@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.css'
})

export class GridContainerComponent {
  jobs: any[] = [];
  data: any[];
  isPopUpOpened = false;
  isElementVisible = false;
  filteredJobs: any[];
  title: string = '';
  location: string = ''
  fullTime: boolean = false


  constructor (private dataService: DataService, private router: Router,private renderer: Renderer2,private jobService: JobService  ) { 
    
  }
   
  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((res : any) =>{
      this.data = res;
      this.filteredJobs = res
     });
     this.dataService.currentTheme$.subscribe(theme => {
      this.toggleDarkTheme(theme === 'dark');
    });

  }



  
  onCardClick(job: any){
    this.router.navigate(['/details']);
    this.dataService.setSelectedJob(job);
  }


  private toggleDarkTheme(isDarkTheme: boolean): void {
    const body = document.body;
    if (isDarkTheme) {
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
    }
  }

  filterJobs(): void {
   this.filteredJobs = this.data.filter((filter) => {
    
     filter.position.toLowerCase().includes(this.title.toLowerCase());
     filter.location.toLowerCase().includes(this.location.toLowerCase());
     !this.fullTime || filter.contract.toLowerCase() === 'full time'
    //  console.log(filter);
     
   })
  }

}

