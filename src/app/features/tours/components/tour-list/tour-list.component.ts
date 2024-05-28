import { Component } from '@angular/core';
import HeaderComponent from '../../../../shared/components/header/header.component';
import FooterComponent from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {

}
