import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRouteComponent } from './show-all-route.component';

describe('ShowAllRouteComponent', () => {
  let component: ShowAllRouteComponent;
  let fixture: ComponentFixture<ShowAllRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
