import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolDetailsSuccessComponent } from './add-school-details-success.component';

describe('AddSchoolDetailsSuccessComponent', () => {
  let component: AddSchoolDetailsSuccessComponent;
  let fixture: ComponentFixture<AddSchoolDetailsSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSchoolDetailsSuccessComponent]
    });
    fixture = TestBed.createComponent(AddSchoolDetailsSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
