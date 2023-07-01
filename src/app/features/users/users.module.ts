import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [UserFormComponent, UserCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [UserFormComponent, UserCardComponent],
})
export class UsersModule {}
