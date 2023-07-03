import { Component, Input, OnInit } from '@angular/core';
import { Assingment } from '../../models/assignment.models';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { formatDate } from 'src/app/core/services/util.service';
import { api } from 'src/app/core/api/apis';
import { MatDialog } from '@angular/material/dialog';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketStatusAssignComponent } from '../ticket-status-assign/ticket-status-assign.component';
import { TicketUserAssignComponent } from '../ticket-user-assign/ticket-user-assign.component';

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
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.profilePicture = `${api.profilePicture}?name=${this.assignment.user.nombre}&size=128`;
    this.checkTicketAssigned(this.assignment);
  }

  profilePicture: string = '';
  ticketAssigned: boolean = true;

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
    estado: 'En proceso',
  };

  progressBar: progressBar = {
    mode: 'determinate',
    value: 100,
  };

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
        this.assignment.estado = result;
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
        this.assignment.user = result;
      }
    });
  }

  deleteTicket(): void {
    this.assignment.user = {
      id: 0,
      nombre: '',
      cedula: '',
    };
    this.checkTicketAssigned(this.assignment);
  }
}
