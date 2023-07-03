import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Assingment } from '../../models/assignment.models';
import { User } from 'src/app/features/users/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent {
  constructor(
    public dialogRef: MatDialogRef<TicketFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Assingment,
    private _snackBar: MatSnackBar
  ) {
    this.modTicket = JSON.parse(JSON.stringify(data));
  }

  users: User[] = [
    {
      id: 1,
      nombre: 'John Doe',
      cedula: '1234567890',
    },
    {
      id: 2,
      nombre: 'Jane Doe',
      cedula: '0987654321',
    },
    {
      id: 3,
      nombre: 'John Smith',
      cedula: '1234509876',
    },
  ];

  modTicket: Assingment = {} as Assingment;

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  changeUser(event: User) {
    Object.assign(this.modTicket, { user: event });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.modTicket);
    this.openSnackBar('Ticket modificado correctamente');
  }
}
