import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ticket } from 'src/app/features/tickets/models/ticket.model';
import { User } from 'src/app/features/users/models/user.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-new-ticket-form',
  templateUrl: './new-ticket-form.component.html',
  styleUrls: ['./new-ticket-form.component.css'],
})
export class NewTicketFormComponent {
  newTicket: Ticket = {} as Ticket;
  selectedUser: User = {} as User;
  isDisabled = true;

  constructor(
    public dialogRef: MatDialogRef<NewTicketFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User[],
    private _snackBar: MatSnackBar,
    private _dashboardService: DashboardService
  ) {}

  changeUser(event: string) {
    const selectedUser = this.data.find((user) => user.nombre === event);
    if (selectedUser) {
      this.selectedUser = selectedUser;
      this.isDisabled = false;
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
    this._dashboardService
      .createTicketWithUser(this.newTicket, this.selectedUser)
      .subscribe({
        next: (msg) => {
          console.log(msg);
          this.openSnackBar('Ticket creado correctamente');
          this.dialogRef.close();
        },
        error: (err) => {
          console.log(err);
          this.openSnackBar('Error al crear el ticket');
        },
      });
  }
}
