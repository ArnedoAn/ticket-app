import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { profilePictureApi } from 'src/app/core/config/constants';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  constructor(public dialog: MatDialog, private _userService: UsersService) {}

  @Input() user: User = {
    id: 1,
    nombre: 'Eduardo Arnedo',
    cedula: '10001',
  } as User;
  profilePicture: string = `${profilePictureApi}?name=${this.user.nombre.replace(
    ' ',
    '+'
  )}&size=40`;

  openEditUserDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: this.user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.user = result;
      }
    });
  }
}
