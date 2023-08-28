import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  name: String = "";
  email: any;
  password: any;
  repeatpassword: any;
  
  constructor(private http: HttpClient, private router: Router) { }
  register() {
    console.log(this.name, this.email, this.password, this.repeatpassword);
    let bodyData = {
      "email": this.email,
      "password": this.password,
      "repeatPassword": this.repeatpassword,
      "name": this.name,
    };
    axios.post('http://localhost:9000/register', bodyData)
      .then(response => {
        console.log(response.data);
        alert("Registered Successfully")
        this.router.navigate(['log-in']);

      })
      .catch(error => {
        const errStr = error.message;
        if (errStr.includes('402')) { alert("Both the passwords must be same") }
        else if (errStr.includes('404')) { alert("Enter the valid E-mail") }
        else if (errStr.includes('403')) { alert("E-mail is already in use") }
        console.error(error);
      });
  }
}
