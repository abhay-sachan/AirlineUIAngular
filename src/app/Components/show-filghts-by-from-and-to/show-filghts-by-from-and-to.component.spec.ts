import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilghtsByFromAndToComponent } from './show-filghts-by-from-and-to.component';

describe('ShowFilghtsByFromAndToComponent', () => {
  let component: ShowFilghtsByFromAndToComponent;
  let fixture: ComponentFixture<ShowFilghtsByFromAndToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFilghtsByFromAndToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFilghtsByFromAndToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
