import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserIdleService } from 'angular-user-idle';
import { Countries } from '../utilities/countries';
import { Cities } from '../utilities/cities';
import { Gender } from '../utilities/gender';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted = false;
  isDisabled = false;
  count = 0;
  countryList = Countries;
  cityList = Cities;
  genderList = Gender;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder, private userIdle: UserIdleService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      lastName: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          Validators.required
        ])
      ),
      phoneNumber: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  startWatching() {
    // Start watching for user inactivity.
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => (this.count = count));
    this.userIdle.onTimeout().subscribe(() => this.funReset());
  }

  stopTimer() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  funReset() {
    // Reset the form
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.stopTimer();
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    this.submitted = true;
    // stop the process here if form is invalid
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      return;
    }
    alert('SUCCESS!!');
    console.log(this.firstFormGroup.controls.firstName.value);
  }
}
