import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStarshipCardComponent } from './main-starship-card.component';

describe('MainStarshipCardComponent', () => {
  let component: MainStarshipCardComponent;
  let fixture: ComponentFixture<MainStarshipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStarshipCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainStarshipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
