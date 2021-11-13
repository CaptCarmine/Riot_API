import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterMasteryComponent } from './mvp/character-mastery/character-mastery.component';

const routes: Routes = [
  { path: 'home', component: CharacterMasteryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
