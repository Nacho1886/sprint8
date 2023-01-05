import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAdressComponent } from './email-adress.component';

describe('EmailAdressComponent', () => {
  let component: EmailAdressComponent;
  let fixture: ComponentFixture<EmailAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
