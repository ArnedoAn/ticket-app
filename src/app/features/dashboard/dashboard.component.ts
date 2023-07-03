import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { Assingment } from '../tickets/models/assignment.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private _dashboardService: DashboardService) {}

  assignments: Assingment[] = [];

  ngOnInit() {
    this.setInitialValues();
  }

  setInitialValues(): void {
    this._dashboardService.getAllAssignments().subscribe((assignments) => {
      this.assignments = assignments;
      console.log(this.assignments)
    });
  }
}
