import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFlightsOfAdminComponent } from './show-flights-of-admin.component';

describe('ShowFlightsOfAdminComponent', () => {
  let component: ShowFlightsOfAdminComponent;
  let fixture: ComponentFixture<ShowFlightsOfAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFlightsOfAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFlightsOfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
