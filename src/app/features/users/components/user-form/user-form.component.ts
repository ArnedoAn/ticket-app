import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  modUser: User = {} as User;

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private _usersService: UsersService,
    private _snackBar: MatSnackBar
  ) {
    this.modUser = JSON.parse(JSON.stringify(data));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  save(): void {
    if (this.modUser.id) {
      this._usersService.UpdateUser(this.modUser).subscribe({
        next: (msg) => {
          console.log(msg);
          this.openSnackBar('Usuario modificado correctamente');
          this.dialogRef.close(this.modUser);
        },
        error: (err) => {
          console.log(err);
          this.openSnackBar('Error al modificar el usuario');
          this.dialogRef.close();
        },
      });
    }
  }
}
