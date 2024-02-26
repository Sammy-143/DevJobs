import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { DetailspageComponent } from './detailspage/detailspage.component';


const routes: Routes = [
  { path: '', component: GridContainerComponent},
  { path: 'details', component: DetailspageComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
