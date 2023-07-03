import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TicketStatusAssignComponent } from './components/ticket-status-assign/ticket-status-assign.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TicketUserAssignComponent } from './components/ticket-user-assign/ticket-user-assign.component';

@NgModule({
  declarations: [
    TicketCardComponent,
    TicketFormComponent,
    TicketStatusAssignComponent,
    TicketUserAssignComponent,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule,
    NgFor,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  exports: [TicketCardComponent],
})
export class TicketsModule {}
