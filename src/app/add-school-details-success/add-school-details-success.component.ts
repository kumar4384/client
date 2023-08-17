import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { School } from '../school';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-school-details-success',
  templateUrl: './add-school-details-success.component.html',
  styleUrls: ['./add-school-details-success.component.scss']
})
export class AddSchoolDetailsSuccessComponent {
  constructor(public dialogRef: MatDialogRef<AddSchoolDetailsSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: School, private router: Router) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
