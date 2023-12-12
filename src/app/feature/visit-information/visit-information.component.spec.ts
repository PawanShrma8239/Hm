import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitInformationComponent } from './visit-information.component';

describe('VisitInformationComponent', () => {
  let component: VisitInformationComponent;
  let fixture: ComponentFixture<VisitInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitInformationComponent]
    });
    fixture = TestBed.createComponent(VisitInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
