import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotInValidatorDirective } from './validators/not-in.directive';

@NgModule({
  declarations: [
    AppComponent, NotInValidatorDirective
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
