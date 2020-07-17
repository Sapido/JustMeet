import { AuthenticationService } from './../../components/service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  lgnuser;
  lgnpassword;

  constructor(private authService: AuthenticationService) { }
 
  ngOnInit() {
  }
 
  login() {
    this.authService.login(this.lgnuser, this.lgnpassword);
  }

  
 
}