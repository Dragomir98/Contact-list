import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  //contains the array with people and the CRUD operations

  people: Person[] = [{
    id: 0,
    firstName: 'Georgi',
    lastName: 'Kostov',
    email: 'jorok@email.com',
    phoneNumber: "356-786-7677",
    job: 'Influencer',
    description: 'Reacts to all kinds of internet videos.'
  },
  {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Vasilev',
    email: 'vaniov@email.com',
    phoneNumber: "356-786-7673",
    job: 'Writer',
    description: 'Writes books about dogs.'
  },
  {
    id: 2,
    firstName: 'Sasha',
    lastName: 'Topolova',
    email: 'sashat@email.com',
    phoneNumber: "356-786-7585",
    job: 'Businessman',
    description: 'Worlds top compot seller.'
  }
];

  create(person: Person) {
    const itemIndex = this.people.length;
    person.id = this.getnextId();//Increases the ID of the person by 1 on creating;
    this.people[itemIndex] = person;
  }

  delete(person: Person) {
    this.people.splice(this.people.indexOf(person), 1);
  }

  //finds the specific person by id
  update(person: Person) {
    const itemIndex = this.people.findIndex(item => item.id === person.id);
    this.people[itemIndex] = person;
  }

  getall(): Person[] {
    console.log(this.people);
    return this.people;
  }

  //Returns a chosen id as an index for a person
  getPersonById(id: number) {
    console.log("Chosen ID is: " + id);
    const itemIndex = this.people.findIndex(item => item.id === id);
    return this.people[itemIndex];
  }

  getnextId(): number {
    return this.people.length + 1;
  }
}
