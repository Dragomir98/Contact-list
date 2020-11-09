import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person.model';
import { PersonService } from '../person/person.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})

export class EditPersonComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private personService: PersonService) { }
  addForm: FormGroup;
  person: Person;

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  pNumRegex = /^(\+\d{1,2}\s?)?0?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  ngOnInit() {
    const personId = localStorage.getItem('editPersonId');

    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.pNumRegex)]],
      job: ['', Validators.required],
      description: ['', Validators.required]
    });
    
    const data = this.personService.getPersonById(+personId);
    this.addForm.setValue(data);
  }

  //Jobs for the dropdown menu
  Job: any = ['Businessman', 'Writer', 'American spy', 'Influencer'];

  //Checks if the text field contains an valid email.
  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  //Through submitting, the form gets updated 
  //and the user is navigated to the home page
  onSubmit() {
    this.personService.update(this.addForm.value);
    this.router.navigate(['']);
  }

  //On canceling form updating, navigating back to the home page
  onCancel() {
    this.router.navigate(['']);
  }
}
