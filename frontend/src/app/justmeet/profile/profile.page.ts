import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../../components/service/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  TOKEN: string;
  username: string;
  email: string;
  rating: number;

  constructor(
    private authService: AuthenticationService, 
    private http: HttpClient,
    private storage: Storage
    ) {
    this.storage.get("user").then((res:any) =>{
    this.username = res.username
    this.email = res.email
    this.rating = res.rating
    })
  }

  logout() {
    this.authService.logout();
  }
}
