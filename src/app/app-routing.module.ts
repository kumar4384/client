import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolAuditDataComponent } from './school-audit-data/school-audit-data.component';
import { AddSchoolDetailsComponent } from './add-school-details/add-school-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'schoolAuditData', component: SchoolAuditDataComponent },
  { path: 'addSchoolDetails', component: AddSchoolDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
