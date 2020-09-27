import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pageTitle: string = 'Details';
  person: Person;
  personId;
  people: Person[]; // Array<string>

  constructor(private router: Router,
              private route: ActivatedRoute,
              private personService: PersonService) {
                //Getting the id of a specific person
                this.personId = this.route.snapshot.paramMap.get('id');
               }

  ngOnInit() {
      //For finding the specific person by his id
      let getPerson = this.personService.people.find(i => i.id == this.personId);
      this.person = getPerson;
  }

  //Calls the router with path edit which redirects to edit-person.component
  editPerson(person: Person) {
    //console.log(person);
    localStorage.removeItem('editPersonId');
    localStorage.setItem('editPersonId', person.id.toString());
    this.router.navigate(['edit']);
    this.personService.update(person);
  }

  //Deletes the chosen person and navigates back to the dashboard page
  deletePerson(person: Person) {
    console.log(person);
    this.personService.delete(person);
    this.router.navigate(['/']);
  }

  //implementation of the 'back' button
  onBack(): void {
      this.router.navigate(['/']);
  }
}
