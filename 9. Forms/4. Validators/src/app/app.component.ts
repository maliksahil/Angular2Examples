import { Component, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AsyncValidator } from './async.validator';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
    selector: 'my-app',
    template: `
    <form novalidate [formGroup]="signUpForm">
     <input type="email" formControlName="email" asyncValidator placeholder="email">
     {{signUpForm.controls.email.errors | json}}
    </form>
  `,
})
export class AppComponent {
    signUpForm: FormGroup;
    constructor(public fb: FormBuilder) {
        this.signUpForm = this.fb.group({
            email: [""]
        });
    }
}
