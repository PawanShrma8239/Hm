import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRegisterationComponent } from './guest-registeration.component';

describe('GuestRegisterationComponent', () => {
  let component: GuestRegisterationComponent;
  let fixture: ComponentFixture<GuestRegisterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestRegisterationComponent]
    });
    fixture = TestBed.createComponent(GuestRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
