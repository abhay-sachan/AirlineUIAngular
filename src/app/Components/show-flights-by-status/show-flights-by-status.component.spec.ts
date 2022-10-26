import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFlightsByStatusComponent } from './show-flights-by-status.component';

describe('ShowFlightsByStatusComponent', () => {
  let component: ShowFlightsByStatusComponent;
  let fixture: ComponentFixture<ShowFlightsByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFlightsByStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFlightsByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
