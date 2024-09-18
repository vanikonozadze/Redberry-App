import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FilterAdditionComponent } from "../filter-addition/filter-addition.component";
import { RealEstateManagerService } from '../../services/real-estate-manager.service';
import { RealEstateCardComponent } from "../real-estate-card/real-estate-card.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FilterAdditionComponent, RealEstateCardComponent],
  providers: [RealEstateManagerService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit{

  userData$: Observable<any>;

  constructor(private realEstateManagerService: RealEstateManagerService) {
    this.userData$ = this.realEstateManagerService.getAgents();
  }

  ngOnInit(): void {
    // this.getAgents();
  }

  // getAgents(){
  //   this.realEstateManagerService.getAgents().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     }
  //   })
  // }

}
