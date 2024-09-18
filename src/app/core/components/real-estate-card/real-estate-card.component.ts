import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-real-estate-card',
  standalone: true,
  imports: [],
  templateUrl: './real-estate-card.component.html',
  styleUrl: './real-estate-card.component.scss'
})
export class RealEstateCardComponent {

  @Input() data: any;

}
