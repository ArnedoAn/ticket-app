import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from 'src/app/core/api/api';
import { Observable } from 'rxjs';
import { User } from '../../users/models/user.model';
import { catchError } from 'rxjs/operators';
import { Assingment } from '../models/assignment.models';
import { Status } from '../models/status.model';
import { AssingmentPutDto } from '../models/DTOs/assignmentPutDto.model';

@Injectable()
export class TicketService {
  constructor(private http: HttpClient) {}

  private readonly urlTickets = API.tickets;
  private readonly urlUsers = API.users;
  private readonly urlAssignments = API.assignments;
  private readonly urlStatus = API.status;

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
    const assignPutDto: AssingmentPutDto = {
      id: assign.id,
      idUser: assign.user.id,
      idTicket: assign.ticket.id,
      idStatus: assign.estado.id,
    };

    return this.http.put<boolean>(this.urlAssignments, assignPutDto).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  getStatuses() {
    return this.http.get<Status[]>(this.urlStatus).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  getAssignments() {}
}
