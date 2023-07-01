import { Component } from '@angular/core';
import { Assingment } from '../../models/assignment.models';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { formatDate } from 'src/app/core/services/util.service';
import { api } from 'src/app/core/api/apis';

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
  profilePicture: string = '';

  ngOnInit(): void {
    this.profilePicture = `${api.profilePicture}?name=${this.assignment.user.nombre}&size=128`;
  }

  assignment: Assingment = {
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
}
