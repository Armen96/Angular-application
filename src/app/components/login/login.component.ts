import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Benedict', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  loginUser(myForm) {
    console.log(myForm.value);
    // if(this.Auth.getUserDetails(userEmail, userPassword).success) {
    //   this.Auth.setLoggedStatus(true);
    //   this.route.navigate(['admin']);
    // } else {
    //   alert(0)
    // }
  }

}
