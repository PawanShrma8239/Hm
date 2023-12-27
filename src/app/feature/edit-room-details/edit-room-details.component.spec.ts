import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomDetailsComponent } from './edit-room-details.component';

describe('EditRoomDetailsComponent', () => {
  let component: EditRoomDetailsComponent;
  let fixture: ComponentFixture<EditRoomDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRoomDetailsComponent]
    });
    fixture = TestBed.createComponent(EditRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
