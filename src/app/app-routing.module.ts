import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewFactComponent } from './new-fact/new-fact.component';
import { OldFactComponent } from './old-fact/old-fact.component';

const routes: Routes = [
  { path: '', redirectTo: '/newFact', pathMatch: 'full' },
  { path: 'newFact', component: NewFactComponent },
  { path: 'oldFact', component: OldFactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
