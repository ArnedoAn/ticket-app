import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Assingment } from '../../models/assignment.models';
import { User } from 'src/app/features/users/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TicketFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Assingment,
    private _snackBar: MatSnackBar,
    private _ticketService: TicketService
  ) {
    this.modTicket = JSON.parse(JSON.stringify(data));
  }

  users: User[] = [];

  ngOnInit(): void {
    this.setInitialData();
  }

  setInitialData() {
    this._ticketService.getAllUsers().subscribe({
      next: (users) => {
        console.log(users);
        this.users = users;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  modTicket: Assingment = {} as Assingment;

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  changeUser(event: string) {
    const selectedUser = this.users.find((user) => user.nombre === event);
    if (selectedUser) {
      this.modTicket.user = selectedUser;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.modTicket) {
      this._ticketService.updateAssignment(this.modTicket).subscribe({
        next: (msg) => {
          console.log(msg);
          this.openSnackBar('Ticket modificado correctamente');
          this.dialogRef.close(this.modTicket);
        },
        error: (err) => {
          console.log(err);
          this.openSnackBar('Error al modificar el ticket');
          this.dialogRef.close();
        },
      });
    }
  }
}
