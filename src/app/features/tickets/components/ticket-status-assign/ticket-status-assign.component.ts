import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Status } from '../../models/status.model';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-status-assign',
  templateUrl: './ticket-status-assign.component.html',
  styleUrls: ['./ticket-status-assign.component.css'],
})
export class TicketStatusAssignComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TicketStatusAssignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private _ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.setInitalStatuses();
  }

  statuses: Status[] = [];

  selectedStatus: string = '';

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
    this.selectedStatus = event;
  }

  save(): void {
    this.dialogRef.close(this.selectedStatus);
    this.openSnackBar('Ticket modificado correctamente');
  }
}
