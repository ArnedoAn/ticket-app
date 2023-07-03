import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-status-assign',
  templateUrl: './ticket-status-assign.component.html',
  styleUrls: ['./ticket-status-assign.component.css'],
})
export class TicketStatusAssignComponent {
  constructor(
    public dialogRef: MatDialogRef<TicketStatusAssignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.modStatus = JSON.parse(JSON.stringify(this.data.status));
  }

  statuses: string[] = ['Asignado', 'En proceso', 'Finalizado'];

  modStatus: string = '';

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeStatus(event: string) {
    this.modStatus = event;
  }

  save(): void {
    this.dialogRef.close(this.modStatus);
    this.openSnackBar('Ticket modificado correctamente');
  }
}
