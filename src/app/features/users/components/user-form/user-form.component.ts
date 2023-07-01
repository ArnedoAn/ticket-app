import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  nombre: string;
  cedula: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  modUser: DialogData = {} as DialogData;

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.modUser = JSON.parse(JSON.stringify(data));
    // console.log(this.modUser);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
