import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person/person.model';

import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  pageTitle: string = 'More details';
  people: Person[]; // Array<string>

  constructor(private router: Router,
              private personService: PersonService) { }

  ngOnInit() {
      //getting all the people for the detail page
      this.people = this.personService.getall();
  }

  //For deleting a person
  deletePerson(person: Person) {
    console.log(person);
    this.personService.delete(person);
  }

  //implementation of the 'back' button
  onBack(): void {
      this.router.navigate(['/']);
  }
}
