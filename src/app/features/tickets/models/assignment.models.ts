import { User } from 'src/app/features/users/models/user.model';
import { Ticket } from './ticket.model';
import { Status } from './status.model';

export interface Assingment {
  id: number;
  user: User;
  ticket: Ticket;
  fecha: string;
  estado: Status;
}
