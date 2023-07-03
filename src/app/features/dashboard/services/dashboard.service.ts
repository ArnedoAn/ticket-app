import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from 'src/app/core/api/api';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Assingment } from '../../tickets/models/assignment.models';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  private readonly urlAssignments = API.assignments;

  getAllAssignments(): Observable<Assingment[]> {
    return this.http.get<Assingment[]>(this.urlAssignments).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }
}
