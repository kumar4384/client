import { Component } from '@angular/core';
import { AuditingService } from '../auditing.service';
import { School } from '../school';

@Component({
  selector: 'app-add-school-details',
  templateUrl: './add-school-details.component.html',
  styleUrls: ['./add-school-details.component.scss']
})
export class AddSchoolDetailsComponent {
  udiseNo: string = '';
  schoolType: string = '';
  schoolName: string = '';
  district: string = '';
  headmasterName: string = '';
  headmasterRetirementDate: string = '';
  headmasterMobileNo: string = '';
  email: string = '';
  studentsStrength: string = '';
  teachersStrength: string = '';
  clericalStrength: string = '';
  lastAuditingYear: string = '';
  lastAuditingDate: string = '';

  constructor(private auditingService: AuditingService) {

  }

  onConfirm() {
    const schoolDetails: School = {
      udiseNo: this.udiseNo,
      schoolType: this.schoolType,
      schoolName: this.schoolName,
      district: this.district,
      headmasterName: this.headmasterName,
      headmasterRetirementDate: this.headmasterRetirementDate,
      headmasterMobileNo: this.headmasterMobileNo,
      email: this.email,
      studentsStrength: this.studentsStrength,
      teachersStrength: this.teachersStrength,
      clericalStrength: this.clericalStrength,
      lastAuditingYear: this.lastAuditingYear,
      lastAuditingDate: this.lastAuditingDate
    };
    this.auditingService.addSchoolDetails(schoolDetails).subscribe(res => {
      console.log("school details added successfully");
    });
  }

}
