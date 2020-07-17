import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../components/service/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  rgsuser;
  rgsemail;
  rgspassword;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  registration(){
    this.authService.register(this.rgsuser, this.rgsemail, this.rgspassword);
  }
}
