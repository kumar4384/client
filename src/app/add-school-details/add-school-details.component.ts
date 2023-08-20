import { Component } from '@angular/core';
import { AuditingService } from '../auditing.service';
import { School } from '../school';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddSchoolDetailsSuccessComponent } from '../add-school-details-success/add-school-details-success.component';


@Component({
  selector: 'app-add-school-details',
  templateUrl: './add-school-details.component.html',
  styleUrls: ['./add-school-details.component.scss']
})
export class AddSchoolDetailsComponent {
  udiseNo: string = '';
  schoolType: string = '';
  schoolName: string = '';
  district: any = null;
  educationDistrict: string = '';
  headmasterName: string = '';
  headmasterRetirementDate: string = '';
  headmasterMobileNo: string = '';
  email: string = '';
  studentsStrength: string = '';
  teachersStrength: string = '';
  clericalStrength: string = '';
  lastAuditingPeriodFrom: string = '';
  lastAuditingPeriodTo: string = '';
  lastAuditingDate: string = '';
  districts: any = districts;
  schoolTypes: string[] = schoolTypes;
  minRetirementDate: Date = new Date();
  maxLastAuditingDate: Date = new Date();
  fromYearsArray: number[] = [];
  toYearsArray: number[] = [];
  educationalDistricts: string[] = [];

  constructor(private auditingService: AuditingService, private router: Router, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.maxLastAuditingDate.setDate(this.maxLastAuditingDate.getDate() - 1);
    const currentYear = new Date().getFullYear();
    const yearsArray: number[] = [];
    for (let year = 2010; year <= currentYear; year++) {
      yearsArray.push(year);
    }

    this.fromYearsArray = yearsArray;
    this.toYearsArray = yearsArray;
  }

  submitData() {
    const schoolDetails: School = {
      udiseNo: this.udiseNo,
      schoolType: this.schoolType,
      schoolName: this.schoolName,
      district: this.district.district,
      educationalDistrict: this.educationDistrict,
      headmasterName: this.headmasterName,
      headmasterRetirementDate: new Date(this.headmasterRetirementDate).toLocaleDateString(),
      headmasterMobileNo: this.headmasterMobileNo,
      email: this.email,
      studentsStrength: this.studentsStrength,
      teachersStrength: this.teachersStrength,
      clericalStrength: this.clericalStrength,
      lastAuditingPeriod: `${this.lastAuditingPeriodFrom}-${this.lastAuditingPeriodTo}`,
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
    this.lastAuditingPeriodFrom = '';
    this.lastAuditingPeriodTo = '';
    this.lastAuditingDate = '';
  }

  populateData() {
    this.udiseNo = '1234';
    this.schoolType = 'Govt High School';
    this.schoolName = 'KHN High School';
    this.district = 'Krishnagiri';
    this.headmasterName = 'Kumar';
    this.headmasterRetirementDate = '05/05/2025';
    this.headmasterMobileNo = '91637';
    this.email = 'kumar4384@gmail.com';
    this.studentsStrength = '400';
    this.teachersStrength = '16';
    this.clericalStrength = '2';
    this.lastAuditingPeriodFrom = '2010';
    this.lastAuditingPeriodTo = '2012';
    this.lastAuditingDate = '15/05/2021';
  }

  updateYearsArray(value: number) {
    this.toYearsArray = this.fromYearsArray;
    this.toYearsArray = this.toYearsArray.filter(year => year > value);
  }

  setEducationalDistricts(district: any) {
    this.educationalDistricts = district.educationalDistricts;
  }

}

const districts = [
  { 'district': 'Ariyalur', 'educationalDistricts': ['Ariyalur'] },
  { 'district': 'Chengalpattu', 'educationalDistricts': ['Chengalpattu', 'Madhuranthagam'] },
  { 'district': 'Chennai', 'educationalDistricts': ['Chennai North Villivakkam', 'Chennai South Saidapettai'] },
  { 'district': 'Coimbatore', 'educationalDistricts': ['Coimbatore', 'Pollachi'] },
  { 'district': 'Cuddalore', 'educationalDistricts': ['Cuddalore', 'Viruthachalam'] },
  { 'district': 'Dharmapuri', 'educationalDistricts': ['Dharmapuri'] },
  { 'district': 'Dindigul', 'educationalDistricts': ['Dindigul', 'Palani'] },
  { 'district': 'Erode', 'educationalDistricts': ['Erode'] },
  { 'district': 'Kallakurichi', 'educationalDistricts': ['Kallakurichi'] },
  { 'district': 'Kancheepuram', 'educationalDistricts': ['Kancheepuram'] },
  { 'district': 'Kanniyakumari', 'educationalDistricts': ['Kanniyakumari', 'Marthandam'] },
  { 'district': 'Karur', 'educationalDistricts': ['Karur'] },
  { 'district': 'Krishnagiri', 'educationalDistricts': ['Krishnagiri', 'Hosur'] },
  { 'district': 'Madurai', 'educationalDistricts': ['Madurai', 'Melur'] },
  { 'district': 'Mayiladuthurai', 'educationalDistricts': ['Mayiladuthurai'] },
  { 'district': 'Nagapattinam', 'educationalDistricts': ['Nagapattinam'] },
  { 'district': 'Namakkal', 'educationalDistricts': ['Namakkal'] },
  { 'district': 'Nilgiris', 'educationalDistricts': ['Nilgiris'] },
  { 'district': 'Perambalur', 'educationalDistricts': ['Perambalur'] },
  { 'district': 'Pudukkottai', 'educationalDistricts': ['Pudukkottai', 'Aranthangi'] },
  { 'district': 'Ramanathapuram', 'educationalDistricts': ['Ramanathapuram'] },
  { 'district': 'Ranipettai', 'educationalDistricts': ['Ranipettai'] },
  { 'district': 'Salem', 'educationalDistricts': ['Salem', 'Sangagiri'] },
  { 'district': 'Sivagangai', 'educationalDistricts': ['Sivagangai'] },
  { 'district': 'Thanjavur', 'educationalDistricts': ['Thanjavur', 'Kumbakonam'] },
  { 'district': 'Theni', 'educationalDistricts': ['Theni'] },
  { 'district': 'Thenkasi', 'educationalDistricts': ['Thenkasi'] },
  { 'district': 'Tirunelveli', 'educationalDistricts': ['Tirunelveli', 'Valliyur'] },
  { 'district': 'Thiruvallur', 'educationalDistricts': ['Thiruvallur', 'Ponneri'] },
  { 'district': 'Thiruvarur', 'educationalDistricts': ['Thiruvarur'] },
  { 'district': 'Thoothukudi', 'educationalDistricts': ['Thoothukudi', 'Kovilpatti'] },
  { 'district': 'Thiruchirapalli', 'educationalDistricts': ['Thiruchirapalli', 'Lalkudi'] },
  { 'district': 'Tiruppathur', 'educationalDistricts': ['Tiruppathur'] },
  { 'district': 'Tiruppur', 'educationalDistricts': ['Tiruppur'] },
  { 'district': 'Tiruvannamalai', 'educationalDistricts': ['Tiruvannamalai', 'Cheyyar'] },
  { 'district': 'Vellore', 'educationalDistricts': ['Vellore'] },
  { 'district': 'Viluppuram', 'educationalDistricts': ['Viluppuram', 'Tindivanam'] },
  { 'district': 'Virudhunagar', 'educationalDistricts': ['Virudhunagar', 'Sivakasi'] }
]

const schoolTypes: string[] = ['Govt High School', 'Govt Higher Secondary School', 'Municipal High School',
  'Municipal Higher Secondary School', 'Aided High School', 'Aided Higher Secondary School']
