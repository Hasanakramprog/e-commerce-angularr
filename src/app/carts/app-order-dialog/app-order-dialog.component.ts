import { Component, Inject,OnInit  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-app-order-dialog',
  templateUrl: './app-order-dialog.component.html'
})
export class AppOrderDialogComponent   {

  name: string = '';
  number: string = '';
  location: string = '';
  userForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AppOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder

  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', [Validators.required, this.phoneNumberValidator]],
      location: ['',Validators.required]
    });
  }

  phoneNumberValidator(control: FormControl) {
    // Replace with your desired phone number format regular expression
    const phoneRegExp = /^(?:\+961|961)?(1|0?3[0-9]?|[4-6]|70|71|76|78|79|7|81?|9)\d{6}$/; // Example for 10-digit US numbers
    if (!control.value || phoneRegExp.test(control.value)) {
      return null; // Valid
    }
    return { invalidNumber: true }; // Error message key (optional)
  }
  onSubmit() {
    // Handle form submission logic here
    // e.g., validate input, send data to server, close dialog
    this.dialogRef.close({ name: this.name, number: this.number ,location: this.location });
  }

  onClose() {
    this.dialogRef.close();
  }

}
