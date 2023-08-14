import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAuditDataComponent } from './school-audit-data.component';

describe('SchoolAuditDataComponent', () => {
  let component: SchoolAuditDataComponent;
  let fixture: ComponentFixture<SchoolAuditDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolAuditDataComponent]
    });
    fixture = TestBed.createComponent(SchoolAuditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
