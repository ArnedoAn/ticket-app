import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { TicketsModule } from '../tickets/tickets.module';
import { UsersModule } from '../users/users.module';
import { DashboardService } from './services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { NewTicketFormComponent } from './components/new-ticket-form/new-ticket-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    DashboardComponent,
    NewUserFormComponent,
    NewTicketFormComponent,
  ],
  imports: [
    CommonModule,
    TicketsModule,
    UsersModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [DashboardService],
  exports: [DashboardComponent],
})
export class DashboardModule {}
