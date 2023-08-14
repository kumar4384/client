import { Component } from '@angular/core';
import { AuditingService } from '../auditing.service';
import { School } from '../school';

@Component({
  selector: 'app-school-audit-data',
  templateUrl: './school-audit-data.component.html',
  styleUrls: ['./school-audit-data.component.scss']
})
export class SchoolAuditDataComponent {
  displayedColumns: string[] = ['udiseNo', 'schoolType', 'schoolName', 'district', 'headmasterName', 'headmasterMobileNo', 'email', 'studentsStrength', 'teachersStrength', 'clericalStrength', 'lastAuditingYear', 'lastAuditingDate'];
  dataSource: School[] = [];
  constructor(private auditingService: AuditingService) {

  }

  ngOnInit() {
    this.auditingService.getAuditData().subscribe((res: School[]) => {
      this.dataSource = res;
    });
  }
}
