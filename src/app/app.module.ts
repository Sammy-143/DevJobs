import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridContainerComponent,
    DetailspageComponent,
    DarkModeToggleComponent,
    PopUpComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
