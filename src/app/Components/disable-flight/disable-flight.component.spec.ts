import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableFlightComponent } from './disable-flight.component';

describe('DisableFlightComponent', () => {
  let component: DisableFlightComponent;
  let fixture: ComponentFixture<DisableFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
