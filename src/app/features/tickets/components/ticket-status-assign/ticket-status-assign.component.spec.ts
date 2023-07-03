import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketStatusAssignComponent } from './ticket-status-assign.component';

describe('TicketUserAssignComponent', () => {
  let component: TicketStatusAssignComponent;
  let fixture: ComponentFixture<TicketStatusAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketStatusAssignComponent]
    });
    fixture = TestBed.createComponent(TicketStatusAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
