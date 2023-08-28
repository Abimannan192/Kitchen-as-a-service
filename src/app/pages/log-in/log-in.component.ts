import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import axios from 'axios';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  email: String = "";
  password: String = "";
  errorMessage: String | null = null;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  register() {
    console.log(this.email, this.password);
    let bodyData = {
      "email": this.email,
      "password": this.password,
    };

    axios.post('http://localhost:9000/login', bodyData)
      .then(response => {
        console.log(response.data);
        this.router.navigate(['home']);
        this.auth.login();
      })
      .catch(error => {
        alert("Invalid Credentials!!!")
        console.error(error);
      });
  }

}
