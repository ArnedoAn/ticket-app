import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [TicketCardComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule,
    NgFor,
  ],
  exports: [TicketCardComponent],
})
export class TicketsModule {}
