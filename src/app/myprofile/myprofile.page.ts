import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  profile_form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {


  }

}
