import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Status } from '../../models/status.model';
import { TicketService } from '../../services/ticket.service';
import { Assingment } from '../../models/assignment.models';

@Component({
  selector: 'app-ticket-status-assign',
  templateUrl: './ticket-status-assign.component.html',
  styleUrls: ['./ticket-status-assign.component.css'],
})
export class TicketStatusAssignComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TicketStatusAssignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Assingment,
    private _snackBar: MatSnackBar,
    private _ticketService: TicketService
  ) {
    this.modStatus = JSON.parse(JSON.stringify(data.estado));
    console.log(this.modStatus);
  }

  ngOnInit(): void {
    this.setInitalStatuses();
    console.log(this.modStatus);
  }

  statuses: Status[] = [];

  modStatus: Status = {} as Status;

  setInitalStatuses() {
    this._ticketService.getStatuses().subscribe((statuses) => {
      this.statuses = statuses;
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeStatus(event: string) {
    const selectedStatus = this.statuses.find(
      (status) => status.nombre === event
    );
    if (selectedStatus) {
      this.modStatus = selectedStatus;
    }
  }

  save(): void {
    this.dialogRef.close(this.modStatus);
    this.openSnackBar('Ticket modificado correctamente');
  }
}
