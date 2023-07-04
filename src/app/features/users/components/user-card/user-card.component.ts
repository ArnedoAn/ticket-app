import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { profilePictureApi } from 'src/app/core/config/constants';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _userService: UsersService,
    private _snackBar: MatSnackBar
  ) {}

  profilePicture: string = '';
  @Input() user: User = {} as User;

  ngOnInit(): void {
    this.setProfilePicture();
  }

  setProfilePicture(): void {
    this.profilePicture = `${profilePictureApi}?name=${this.user.nombre.replace(
      ' ',
      '+'
    )}&size=40`;
  }

  updateUser(): void {
    this._userService.UpdateUser(this.user).subscribe({
      next: (msg) => {
        console.log(msg);
        this.setProfilePicture();
        this.openSnackBar('Usuario modificado correctamente');
      },
      error: (err) => {
        console.log(err);
        this.openSnackBar('Error al modificar el usuario');
      },
    });
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  openEditUserDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: this.user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.user = result;
        this.updateUser();
      }
    });
  }
}
