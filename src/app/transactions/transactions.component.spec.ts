import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRANSACTIONSComponent } from './transactions.component';

describe('TRANSACTIONSComponent', () => {
  let component: TRANSACTIONSComponent;
  let fixture: ComponentFixture<TRANSACTIONSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TRANSACTIONSComponent]
    });
    fixture = TestBed.createComponent(TRANSACTIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
