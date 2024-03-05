// header component.ts

import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  constructor(private dataService: DataService) {}

  toggleTheme(event: any): void {
    const theme = event.target.checked ? 'dark' : 'light';
    this.dataService.setTheme(theme);
  }
}
