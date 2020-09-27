import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../person/person.model';
import { PersonService } from '../person/person.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})

export class AddPersonComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private personService: PersonService) { }
  addForm: FormGroup;

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  pNumRegex = /^(\+\d{1,2}\s?)?0?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.pNumRegex)]],
      job: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  //Jobs for the dropdown menu
  Job: any = ['Businessman', 'Writer', 'American spy', 'Influencer'];

  //Checks if the text field contains an entrie. 
  //If the entrie is valid the Submit-Button will be activated
  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  //Checks if the text field contains an valid email.
  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }  

  //For creating the form and navigating to the home page
  onSubmit() {
    this.personService.create(this.addForm.value);
    this.router.navigate(['']);
  }

  //For canceling the process of form creating and navigating to the dashboard page
  onCancel() {
    this.router.navigate(['']);
  }
}
