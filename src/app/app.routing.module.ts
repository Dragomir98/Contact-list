import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'edit', component: EditPersonComponent },
  { path: 'add', component: AddPersonComponent },
  { path: '', component: DashboardComponent },
  { path: 'person-detail', component: PersonDetailComponent },
  { path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
