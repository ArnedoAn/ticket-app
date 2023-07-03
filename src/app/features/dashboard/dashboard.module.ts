import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TicketsModule } from '../tickets/tickets.module';
import { UsersModule } from '../users/users.module';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, TicketsModule, UsersModule],
  providers: [DashboardService],
  exports: [DashboardComponent],
})
export class DashboardModule {

}
