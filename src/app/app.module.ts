import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { DiscoverComponent } from './Components/discover/discover.component';
import { JobsFilterComponent } from './Components/discover/jobs-filter/jobs-filter.component';
import { JobCardComponent } from './Components/discover/job-card/job-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './Components/review/review.component';
import { SliderComponent } from './Components/review/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiscoverComponent,
    JobsFilterComponent,
    JobCardComponent,
    ReviewComponent,
    SliderComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
