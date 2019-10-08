import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

import { MatStepperModule } from '@angular/material/stepper';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatBadgeModule,
  MatSelectModule,
  MatChipsModule
} from '@angular/material';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableFormComponentComponent } from './disable-form-component/disable-form-component.component';
import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [AppComponent, SignUpComponent, DisableFormComponentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatChipsModule,
    MatSelectModule,
    UserIdleModule.forRoot({ idle: 10, timeout: 10, ping: 10 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
