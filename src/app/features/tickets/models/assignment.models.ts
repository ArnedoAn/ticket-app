import { User } from 'src/app/features/users/models/user.model';
import { Ticket } from './ticket.model';

export interface Assingment {
  user: User;
  ticket: Ticket;
  fecha: string;
  estado: string;
}
