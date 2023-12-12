import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentReservationsComponent } from './recent-reservations.component';

describe('RecentReservationsComponent', () => {
  let component: RecentReservationsComponent;
  let fixture: ComponentFixture<RecentReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentReservationsComponent]
    });
    fixture = TestBed.createComponent(RecentReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
