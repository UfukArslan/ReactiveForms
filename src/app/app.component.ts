import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { notInValidator } from './validators/not-in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  greeting: string;
  displayedGreeting: string;
  greetingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.greetingForm = this.formBuilder.group({
      greeting: ['',[Validators.required, notInValidator(['Bob', 'John'])]],
    });
    this.greetingForm.valueChanges.subscribe(values => {
      this.greeting = values.greeting;
    })

  }

    displayGreeting() {
      if (this.greetingForm.valid) {
        this.displayedGreeting = this.greeting;
      }
    }
  }
