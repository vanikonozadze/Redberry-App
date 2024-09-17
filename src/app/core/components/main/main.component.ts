import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FilterAdditionComponent } from "../filter-addition/filter-addition.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FilterAdditionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
