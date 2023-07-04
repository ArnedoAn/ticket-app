import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Assingment } from '../../tickets/models/assignment.models';
import { User } from '../../users/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NewTicketFormComponent } from './new-ticket-form/new-ticket-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _dashboardService: DashboardService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  assignments: Assingment[] = [];
  users: User[] = [];

  ngOnInit() {
    this.setInitialValues();
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  openNewUserDialog(): void {
    const dialogRef = this.dialog.open(NewUserFormComponent, {
      width: '400px',
    });
  }

  openNewTicketDialog(): void {
    const dialogRef = this.dialog.open(NewTicketFormComponent, {
      width: '450px',
      // height: '600px',
      data: this.users,
    });
  }

  setInitialValues(): void {
    this._dashboardService.getAllAssignments().subscribe((assignments) => {
      this.assignments = assignments;
    });
    this._dashboardService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteTicket(assignment: Assingment): void {
    const index = this.assignments.findIndex((a) => a.id === assignment.id);
    if (index !== -1) {
      this.assignments.splice(index, 1);
    }
  }
}
