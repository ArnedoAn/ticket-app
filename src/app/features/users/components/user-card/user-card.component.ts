import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { api } from 'src/app/core/api/apis';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  user: User = { id: 0, nombre: 'Andres Arnedo', cedula: '123456' };

  profilePicture: string = '';
  ngOnInit(): void {
    this.profilePicture = `${
      api.profilePicture
    }?name=${this.user.nombre.replace(' ', '+')}&size=40`;
  }

  @Input() set userIn(user: User) {
    this.user = user;
  }
}
