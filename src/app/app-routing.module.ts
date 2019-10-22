import { NgModule } from "@angular/core";
import{ RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Создаём массив роутов которые будут корневыми для нашего приложения
  {path: '', redirectTo: 'login', pathMatch: 'full'}
  // при заходе на странницу, человек который не зарегестрировался будет направлен на странницу "login "
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
