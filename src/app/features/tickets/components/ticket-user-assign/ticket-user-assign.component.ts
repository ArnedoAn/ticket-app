import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/features/users/models/user.model';
import { Assingment } from '../../models/assignment.models';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-user-assign',
  templateUrl: './ticket-user-assign.component.html',
  styleUrls: ['./ticket-user-assign.component.css'],
})
export class TicketUserAssignComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TicketUserAssignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Assingment,
    private _snackBar: MatSnackBar,
    private _ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.setInitUsers();
    this.modAssignment = JSON.parse(JSON.stringify(this.data));
  }

  users: User[] = [];
  modAssignment: Assingment = {} as Assingment;
  selectedUser: User = {} as User;

  setInitUsers() {
    this._ticketService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateAssignment() {
    this._ticketService.assignUserToTicket(this.modAssignment).subscribe({
      next: (msg) => {
        console.log(msg);
        this.openSnackBar('Usuario asignado correctamente.');
        this.dialogRef.close(this.modAssignment);
      },
      error: (err) => {
        console.log(err);
        this.openSnackBar('Error al asignar el usuario');
        this.dialogRef.close();
      },
    });
  }

  setAssignment(event: string) {
    const selectedUser = this.users.find((user) => user.nombre === event);
    if (selectedUser) {
      this.modAssignment.user = selectedUser;
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log(this.selectedUser);
    this.dialogRef.close(this.selectedUser);
    this.openSnackBar('Usuario asignado correctamente.');
  }
}
