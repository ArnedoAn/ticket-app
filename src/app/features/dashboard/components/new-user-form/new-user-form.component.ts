import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ticket } from 'src/app/features/tickets/models/ticket.model';
import { User } from 'src/app/features/users/models/user.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent {
  constructor(
    public dialogRef: MatDialogRef<NewUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket,
    private _snackBar: MatSnackBar,
    private _dashboardService: DashboardService
  ) {}

  newUser: User = {} as User;

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  save(): void {
    this._dashboardService.createUser(this.newUser).subscribe({
      next: (msg) => {
        console.log(msg);
        this.openSnackBar('Usuario creado correctamente');
        this.dialogRef.close(this.newUser);
      },
      error: (err) => {
        console.log(err);
        this.openSnackBar('Error al crear el usuario');
        this.dialogRef.close();
      },
    });
  }
}
