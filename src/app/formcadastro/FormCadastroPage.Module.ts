import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './formcadastro-routing.module';


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCadastroPageModule {
}
