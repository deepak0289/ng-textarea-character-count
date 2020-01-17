import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FreetextboxComponent } from './freetextbox/freetextbox.component';
import { PasswordCheckerComponent } from './password-checker/password-checker.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'freetextbox',
        component: FreetextboxComponent
    },
    {
        path: 'password',
        component: PasswordCheckerComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
