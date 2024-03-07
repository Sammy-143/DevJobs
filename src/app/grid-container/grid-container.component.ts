import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.css'
})

export class GridContainerComponent {
  isPopupVisible: boolean = false;
  data: string

  constructor (private dataService: DataService, private router: Router,private renderer: Renderer2 ) { 
    
  }
   
  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((res : any) =>{
      this.data = res;
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
  


}