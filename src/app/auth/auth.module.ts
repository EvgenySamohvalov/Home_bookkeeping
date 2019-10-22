import { NgModule } from "@angular/core";

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations : [
        LoginComponent,
        RegistrationComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
        // несёт в себе базовый функционал.(директивы)
    ]
    // отвечает за регистрацию определённых компонентов внутри нашего модуля
})

export class AuthModule {

};
