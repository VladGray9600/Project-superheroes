import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesFormComponent } from './components/heroes-form/heroes-form.component';
const routes: Routes = [
  {
    path:'',
    component: HeroesListComponent
  },
  {
    path:'heroes',
    component: HeroesListComponent
  },
  {
    path:'heroes/create',
    component: HeroesFormComponent
  },
  {
    path:'heroes/edit/:id',
    component: HeroesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
