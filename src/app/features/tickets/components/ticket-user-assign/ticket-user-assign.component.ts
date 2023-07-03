import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/features/users/models/user.model';

@Component({
  selector: 'app-ticket-user-assign',
  templateUrl: './ticket-user-assign.component.html',
  styleUrls: ['./ticket-user-assign.component.css'],
})
export class TicketUserAssignComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TicketUserAssignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

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

  selectedUser: User = {} as User;

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
