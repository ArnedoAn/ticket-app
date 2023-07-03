import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/core/api/api';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  private readonly api = API.users;

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.api + '/' + id.toString()).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  UpdateUser(user: User): Observable<boolean> {
    const url = this.api;
    return this.http.put<boolean>(url, user).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }

  AddUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.api, user).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      })
    );
  }
}
