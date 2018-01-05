import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.sass']
})
export class JoinComponent implements OnInit {

  rForms: FormGroup;
  name: string = '';
  email: string = '';
  thingsYouKnow: string = '';
  advice: string = '';
  alert: string = 'This field is required';

  constructor(private fb: FormBuilder) {
    this.rForms = fb.group({
      'name': ['', Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(25)])],
      'email': ['', Validators.email],
      'thingsYouKnow': ['', Validators.compose([Validators.required ,Validators.minLength(3)])],
      'advice': ['', Validators.nullValidator],
    });
  }

  ngOnInit() {
    // this.rForms.get('name').valueChanges.subscribe(data => console.log(data));
  }

  addDetails(details) {
    console.log(details);
  }

}
