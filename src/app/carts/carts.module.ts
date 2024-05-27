import { FormsModule } from '@angular/forms';
import { RouterModule ,Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';
import { AppOrderDialogComponent } from './app-order-dialog/app-order-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {  ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
// import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    CartComponent,
    AppOrderDialogComponent,

  ],
  imports: [
    CommonModule,RouterModule,FormsModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose,ReactiveFormsModule,FontAwesomeModule
  ]
  ,
  exports:[CartComponent,]
})
export class CartsModule { }
