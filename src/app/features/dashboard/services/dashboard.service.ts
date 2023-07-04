import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from 'src/app/core/api/api';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Assingment } from '../../tickets/models/assignment.models';
import { User } from '../../users/models/user.model';

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

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(API.users).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  createTicket(ticket: Assingment): Observable<boolean> {
    return this.http.post<boolean>(API.tickets, ticket).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  createAssignment(assignment: Assingment): Observable<boolean> {
    return this.http.post<boolean>(API.assignments, assignment).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  createUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(API.users, user).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }
}
