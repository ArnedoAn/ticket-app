import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from 'src/app/core/api/api';
import { Observable } from 'rxjs';
import { User } from '../../users/models/user.model';
import { catchError } from 'rxjs/operators';
import { Assingment } from '../models/assignment.models';

@Injectable()
export class TicketService {
  constructor(private http: HttpClient) {}

  private readonly urlTickets = API.tickets;
  private readonly urlUsers = API.users;
  private readonly urlAssignments = API.assignments;

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  assignUserToTicket(assign: Assingment): Observable<boolean> {
    return this.http.put<boolean>(this.urlAssignments, assign).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  updateAssignment(assign: Assingment): Observable<boolean> {
    return this.http.put<boolean>(this.urlAssignments, assign).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  getAssignments() {}
}
