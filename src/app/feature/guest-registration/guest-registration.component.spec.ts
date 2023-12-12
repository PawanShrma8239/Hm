import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRegistrationComponent } from './guest-registration.component';

describe('GuestRegistrationComponent', () => {
  let component: GuestRegistrationComponent;
  let fixture: ComponentFixture<GuestRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestRegistrationComponent]
    });
    fixture = TestBed.createComponent(GuestRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
