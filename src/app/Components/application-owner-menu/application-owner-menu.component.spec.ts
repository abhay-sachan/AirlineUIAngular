import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationOwnerMenuComponent } from './application-owner-menu.component';

describe('ApplicationOwnerMenuComponent', () => {
  let component: ApplicationOwnerMenuComponent;
  let fixture: ComponentFixture<ApplicationOwnerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationOwnerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationOwnerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
