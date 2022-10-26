import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLatestBookingComponent } from './show-latest-booking.component';

describe('ShowLatestBookingComponent', () => {
  let component: ShowLatestBookingComponent;
  let fixture: ComponentFixture<ShowLatestBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLatestBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLatestBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
