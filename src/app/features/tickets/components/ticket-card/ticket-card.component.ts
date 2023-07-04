import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Assingment } from '../../models/assignment.models';
import { profilePictureApi } from 'src/app/core/config/constants';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { formatDate } from 'src/app/core/services/util.service';
import { MatDialog } from '@angular/material/dialog';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketStatusAssignComponent } from '../ticket-status-assign/ticket-status-assign.component';
import { TicketUserAssignComponent } from '../ticket-user-assign/ticket-user-assign.component';
import { TicketService } from '../../services/ticket.service';

interface progressBar {
  mode: ProgressBarMode;
  value: number;
}

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css'],
})
export class TicketCardComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.profilePicture = `${profilePictureApi}?name=${this.assignment.user.nombre}&size=128`;
    this.checkTicketAssigned(this.assignment);
    this.tempAssignment = JSON.parse(JSON.stringify(this.assignment));
    this.assignment.fecha = formatDate(this.assignment.fecha);
  }

  @Input() assignment: Assingment = {} as Assingment;

  @Output() ticketDeleted: EventEmitter<Assingment> =
    new EventEmitter<Assingment>();

  tempAssignment: Assingment = {} as Assingment;
  profilePicture: string = '';
  ticketAssigned: boolean = true;

  progressBar: progressBar = {
    mode: 'determinate',
    value: 100,
  };

  openSnackBar(message: string): void {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  updateAssignment(): void {
    this._ticketService.updateAssignment(this.tempAssignment).subscribe({
      next: (data) => {
        console.log(data);
        this.assignment = this.tempAssignment;
        this.openSnackBar('Ticket modificado correctamente');
      },
      error: (error) => {
        console.error(error);
        this.openSnackBar('Error al modificar el ticket');
      },
    });
  }

  updateAssignmentWithTicket(): void {
    this._ticketService
      .updateAssignmentWithTicket(this.tempAssignment)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.assignment = this.tempAssignment;
          this.openSnackBar('Ticket modificado correctamente');
        },
        error: (error) => {
          console.error(error);
          this.openSnackBar('Error al modificar el ticket');
        },
      });
  }

  deleteAssignmentWithTicket(): void {
    this._ticketService.deleteAssignment(this.tempAssignment).subscribe({
      next: (data) => {
        console.log(data);
        this.ticketDeleted.emit(this.assignment);
        this.openSnackBar('Ticket modificado correctamente');
      },
      error: (error) => {
        console.error(error);
        this.openSnackBar('Error al modificar el ticket');
      },
    });
  }

  checkTicketAssigned(assignment: Assingment): void {
    if (assignment.user.id == 0) {
      this.ticketAssigned = false;
    }
  }

  openEditTicketDialog(): void {
    const dialogRef = this.dialog.open(TicketFormComponent, {
      data: this.assignment,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.tempAssignment = result;
        this.updateAssignmentWithTicket();
      }
    });
  }

  openChangeStatusDialog(): void {
    const dialogRef = this.dialog.open(TicketStatusAssignComponent, {
      data: this.assignment,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.tempAssignment.estado = result;
        this.updateAssignment();
      }
    });
  }

  openUserAssignDialog(): void {
    const dialogRef = this.dialog.open(TicketUserAssignComponent, {
      data: this.assignment,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.tempAssignment.user = result;
        this.updateAssignment();
      }
    });
  }
}
