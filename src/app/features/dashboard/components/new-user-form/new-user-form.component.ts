import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ticket } from 'src/app/features/tickets/models/ticket.model';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent {
  constructor(
    public dialogRef: MatDialogRef<NewUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket,
    private _snackBar: MatSnackBar
  ) {}
}
