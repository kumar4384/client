import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from './school';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditingService {

  constructor(private httpClient: HttpClient) { }

  getAuditData(): Observable<School[]> {
    return this.httpClient.get<School[]>('/api/audit');
  }

  addSchoolDetails(schoolDetails: School): Observable<School> {
    return this.httpClient.post<School>('/api/audit/add', schoolDetails).pipe(
      map(res => {
        return res
      })
    )
  }
}
