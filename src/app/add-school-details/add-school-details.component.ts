import { Component } from '@angular/core';
import { AuditingService } from '../auditing.service';
import { School } from '../school';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddSchoolDetailsSuccessComponent } from '../add-school-details-success/add-school-details-success.component';
import { NgForm } from '@angular/forms';

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
  educationDistrict: string = '';
  headmasterName: string = '';
  headmasterRetirementDate: string = '';
  headmasterMobileNo: string = '';
  email: string = '';
  studentsStrength: string = '';
  teachersStrength: string = '';
  clericalStrength: string = '';
  lastAuditingYear: string = '';
  lastAuditingDate: string = '';
  districts: string[] = districts;
  schoolTypes: string[] = schoolTypes;
  minRetirementDate: Date = new Date();
  maxLastAuditingDate: Date = new Date();

  constructor(private auditingService: AuditingService, private router: Router, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.maxLastAuditingDate.setDate(this.maxLastAuditingDate.getDate() - 1);
  }

  submitData() {
    const schoolDetails: School = {
      udiseNo: this.udiseNo,
      schoolType: this.schoolType,
      schoolName: this.schoolName,
      district: this.district,
      educationalDistrict: this.educationDistrict,
      headmasterName: this.headmasterName,
      headmasterRetirementDate: new Date(this.headmasterRetirementDate).toLocaleDateString(),
      headmasterMobileNo: this.headmasterMobileNo,
      email: this.email,
      studentsStrength: this.studentsStrength,
      teachersStrength: this.teachersStrength,
      clericalStrength: this.clericalStrength,
      lastAuditingYear: this.lastAuditingYear,
      lastAuditingDate: new Date(this.lastAuditingDate).toLocaleDateString()
    };
    this.auditingService.addSchoolDetails(schoolDetails).subscribe(res => {
      console.log("school details added successfully");
      this.clearData();
      this.dialog.open(AddSchoolDetailsSuccessComponent, {
        data: res.schoolDetails,
      });
    });
  }

  clearData() {
    this.udiseNo = '';
    this.schoolType = '';
    this.schoolName = '';
    this.district = '';
    this.educationDistrict = '';
    this.headmasterName = '';
    this.headmasterRetirementDate = '';
    this.headmasterMobileNo = '';
    this.email = '';
    this.studentsStrength = '';
    this.teachersStrength = '';
    this.clericalStrength = '';
    this.lastAuditingYear = '';
    this.lastAuditingDate = '';
  }

  populateData() {
    this.udiseNo = '1234';
    this.schoolType = 'Govt High School';
    this.schoolName = 'KHN High School';
    this.district = 'Krishnagiri';
    this.educationDistrict = 'Hosur';
    this.headmasterName = 'Kumar';
    this.headmasterRetirementDate = '05/05/2025';
    this.headmasterMobileNo = '91637';
    this.email = 'kumar4384@gmail.com';
    this.studentsStrength = '400';
    this.teachersStrength = '16';
    this.clericalStrength = '2';
    this.lastAuditingYear = '2021-2022';
    this.lastAuditingDate = '15/05/2021';
  }

}

const districts: string[] = ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode',
  'Kallakurichi', 'Kancheepuram', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Kanniyakumari', 'Namakkal', 'Perambalur',
  'Pudukottai', 'Ramanathapuram', 'Ranipettai', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur', 'Theni', 'Thiruvallur', 'Thiruvarur', 'Thoothukudi',
  'Thiruchirapalli', 'Thirunelveli', 'Tiruppathur', 'Tiruppur', 'Tiruvannamalai', 'The Nilgiris', 'Vellore', 'Viluppuram', 'Virudhunagar'
]

const schoolTypes: string[] = ['Govt High School', 'Govt Higher Secondary School', 'Municipal High School',
  'Municipal Higher Secondary School', 'Aided High School', 'Aided Higher Secondary School']
