import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FheaderComponent } from './fheader.component';

describe('FheaderComponent', () => {
  let component: FheaderComponent;
  let fixture: ComponentFixture<FheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FheaderComponent]
    });
    fixture = TestBed.createComponent(FheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
