import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeckComponent } from './deck/deck.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "", pathMatch: "full" },
    ]
  },
  {
    path: 'decks',
    component: DeckComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
