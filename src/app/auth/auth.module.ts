import { NgModule } from "@angular/core";

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations : [
        LoginComponent,
        RegistrationComponent,
        AuthComponent
    ],
    imports: [
        CommonModule
        // несёт в себе базовый функционал.(директивы)
    ]
    // отвечает за регистрацию определённых компонентов внутри нашего модуля
})

export class AuthModule {

};