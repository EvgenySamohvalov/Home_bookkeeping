import { NgModule } from "@angular/core";
import{ RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent }
  // регестрируем логти компонентов
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  // Доступ к дочернему элементу, будут внутренние модули у этого роута
  exports: [RouterModule]
})

export class AuthRoutingModule{}
