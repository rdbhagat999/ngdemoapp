import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-regex-validations',
  templateUrl: './input-regex-validations.component.html',
  styleUrls: ['./input-regex-validations.component.scss']
})
export class InputRegexValidationsComponent implements OnInit {

  addUserForm: FormGroup;
  isFormSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initform();
  }

  initform() {

    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

    this.addUserForm = this.fb.group({
      name: [ '', [Validators.required, Validators.pattern(PAT_NAME)] ],
      email: ['', [Validators.required, Validators.pattern(PAT_EMAIL)] ],
    });
  }

  // Only Integer Numbers
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  // Only Numbers with Decimals
  keyPressNumbersDecimal(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Only AlphaNumeric
  keyPressAlphaNumeric(event) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  // Only AlphaNumeric with Some Characters [-_ ]
  keyPressAlphaNumericWithCharacters(event) {

    var inp = String.fromCharCode(event.keyCode);
    // Allow numbers, alpahbets, space, underscore
    if (/[a-zA-Z0-9-_ ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  submitUser() {

    // Set flag to true
    this.isFormSubmitted = true;

    // Return if form is invalid
    if (this.addUserForm.invalid) {
      return;
    }

    // Form field values
    console.log(this.addUserForm.value);
  }

}
