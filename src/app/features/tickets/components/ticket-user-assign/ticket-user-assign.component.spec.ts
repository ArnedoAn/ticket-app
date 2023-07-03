import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketUserAssignComponent } from './ticket-user-assign.component';

describe('TicketUserAssignComponent', () => {
  let component: TicketUserAssignComponent;
  let fixture: ComponentFixture<TicketUserAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketUserAssignComponent]
    });
    fixture = TestBed.createComponent(TicketUserAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
