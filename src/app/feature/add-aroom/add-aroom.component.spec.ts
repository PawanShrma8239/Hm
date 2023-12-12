import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddARoomComponent } from './add-aroom.component';

describe('AddARoomComponent', () => {
  let component: AddARoomComponent;
  let fixture: ComponentFixture<AddARoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddARoomComponent]
    });
    fixture = TestBed.createComponent(AddARoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
