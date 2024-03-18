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
  title: string = '';
  location: string = '';
  fullTime: boolean = false;
  filteredJobs:any[]=[]
  


  constructor (private dataService: DataService, private router: Router,private renderer: Renderer2,private jobService: JobService  ) { 
    
  }
   
  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((res : any) =>{
      this.data = res;
      this.filteredJobs = this.data
      
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

  filterJobs() {
    
      this.filteredJobs = this.data.filter(job => {
    
      let titleMatch = job.position.toLowerCase().includes(this.title.toLowerCase()) || job.company.toLowerCase().includes(this.title.toLowerCase());
      let locationMatch = job.location.toLowerCase().includes(this.location.toLowerCase());
      let fullTimeMatch = !this.fullTime || job.contract.toLowerCase() === 'full time';

      return titleMatch && locationMatch && fullTimeMatch;
    });

 
    // console.log(this.filteredJobs);
  }
  
  

}

