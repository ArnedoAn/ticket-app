import { Component, Input } from '@angular/core';
import { Assingment } from '../../models/assignment.models';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { formatDate } from 'src/app/core/services/util.service';
import { api } from 'src/app/core/api/apis';
import { MatDialog } from '@angular/material/dialog';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketStatusAssignComponent } from '../ticket-status-assign/ticket-status-assign.component';

interface progressBar {
  mode: ProgressBarMode;
  value: number;
}

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css'],
})
export class TicketCardComponent {
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  profilePicture: string = '';
  ticketAssigned: boolean = true;

  ngOnInit(): void {
    this.profilePicture = `${api.profilePicture}?name=${this.assignment.user.nombre}&size=128`;
    this.checkTicketAssigned(this.assignment);
  }

  checkTicketAssigned(assignment: Assingment): void {
    if (assignment.user.id == 0) {
      this.ticketAssigned = false;
    }
  }

  @Input() assignment: Assingment = {
    user: {
      id: 1,
      nombre: 'John Doe',
      cedula: '1234567890',
    },
    ticket: {
      id: 1,
      descripcion: 'Descripción del ticket',
      prioridad: 'Alta',
    },
    fecha: formatDate(new Date()),
    estado: 'Asignado',
  };

  progressBar: progressBar = {
    mode: 'determinate',
    value: 100,
  };

  openEditTicketDialog(): void {
    const dialogRef = this.dialog.open(TicketFormComponent, {
      data: this.assignment,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.assignment = result;
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
        this.assignment.user = result;
      }
    });
  }

  openUserAssignDialog(): void {}

  deleteTicket(): void {
    this.assignment.user = {
      id: 0,
      nombre: '',
      cedula: '',
    };
    this.checkTicketAssigned(this.assignment);
  }
}
