import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TourListComponent} from './features/tours/components/tour-list/tour-list.component';
import {TourDetailComponent} from './features/tours/components/tour-detail/tour-detail.component';
import HeaderComponent from './shared/components/header/header.component';
import FooterComponent from './shared/components/footer/footer.component';


@NgModule({
  declarations: [
    TourListComponent,
    TourDetailComponent    
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class ToursModule { }
