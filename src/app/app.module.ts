import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FreetextboxComponent } from './freetextbox/freetextbox.component';
import { PasswordCheckerComponent } from './password-checker/password-checker.component';

@NgModule({
  declarations: [
    AppComponent,
    FreetextboxComponent,
    PasswordCheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
