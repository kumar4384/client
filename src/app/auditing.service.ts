import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from './school';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditingService {

  constructor(private httpClient: HttpClient) { }

  getAuditData(): Observable<School[]> {
    return this.httpClient.get<School[]>('/api/audit');
  }

  addSchoolDetails(schoolDetails: School): Observable<any> {
    return this.httpClient.post<School>('/api/audit/add', schoolDetails).pipe(
      map(res => {
        return res
      }),
      catchError(error => {
        return error;
      })
    )
  }

  deleteSchoolDetails(id: string) {
    return this.httpClient.delete<School>('/api/audit/'+id).pipe(
      map(res => {
        return res
      }),
      catchError(error => {
        return error;
      })
    )
  }
}
