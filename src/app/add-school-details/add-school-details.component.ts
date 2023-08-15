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
  districts: string[] = districts;
  schoolTypes: string[] = schoolTypes;
  minRetirementDate: Date = new Date();
  maxLastAuditingDate: Date = new Date();

  constructor(private auditingService: AuditingService) {

  }

  ngOnInit() {
    this.maxLastAuditingDate.setDate(this.maxLastAuditingDate.getDate() - 1);
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

  onClear() {
    this.udiseNo = '';
    this.schoolType = '';
    this.schoolName = '';
    this.district = '';
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

}

const districts: string[] = ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode',
  'Kallakurichi', 'Kancheepuram', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Kanniyakumari', 'Namakkal', 'Perambalur',
  'Pudukottai', 'Ramanathapuram', 'Ranipettai', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur', 'Theni', 'Thiruvallur', 'Thiruvarur', 'Thoothukudi',
  'Thiruchirapalli', 'Thirunelveli', 'Tiruppathur', 'Tiruppur', 'Tiruvannamalai', 'The Nilgiris', 'Vellore', 'Viluppuram', 'Virudhunagar'
]

const schoolTypes: string[] = ['Govt High School', 'Govt Higher Secondary School', 'Municipal High School',
  'Munical Higher Secondary School', 'Aided High School', 'Aided Higher Secondary School']
