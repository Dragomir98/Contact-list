import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { PersonComponent } from './person/person.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PersonComponent,
    DashboardComponent,
    EditPersonComponent,
    PersonDetailComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule//added search pipe and the code is in person.component.html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
