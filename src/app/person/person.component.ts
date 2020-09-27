import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { PersonService } from './person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})

export class PersonComponent implements OnInit {

  people: Person[]; // Array<string>

  term: String; // For implementing the search pipe

  constructor(private personService: PersonService, private router: Router) {
  }

  //Calls the router with path edit which redirects to edit-person.component
  editPerson(person: Person) {
    localStorage.setItem('editPersonId', person.id.toString());
    this.router.navigate(['edit']);
    this.personService.update(person);
  }

  //Deletes the chosen person
  deletePerson(person: Person) {
    console.log(person);
    this.personService.delete(person);
  }

  //Gets all the people from the service
  ngOnInit() {
    //Provides the data for the table by getting all people from the service
    this.people = this.personService.getall();
  }
}
