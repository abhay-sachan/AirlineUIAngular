import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerBookingsComponent } from './show-customer-bookings.component';

describe('ShowCustomerBookingsComponent', () => {
  let component: ShowCustomerBookingsComponent;
  let fixture: ComponentFixture<ShowCustomerBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustomerBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCustomerBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
