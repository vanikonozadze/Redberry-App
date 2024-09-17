import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAdditionComponent } from './filter-addition.component';

describe('FilterAdditionComponent', () => {
  let component: FilterAdditionComponent;
  let fixture: ComponentFixture<FilterAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
