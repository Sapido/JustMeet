import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Popup } from './popup';
import {User} from '../models/User';

var user = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(
    private plt: Platform, 
    private http: HttpClient, 
    public LUser: User,
    public storage: Storage,
    public popup: Popup
    ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });

  }

  checkToken() {
    this.storage.get(user).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login(lgnuser: string, lgnpassword: string) {
    this.http.post('http://localhost:8080/api/users/login',
      {
        "username": lgnuser,
        "password": lgnpassword
      }, 
      { 'responseType': 'json' }
    ).toPromise().then(
      (res:any) => {

      this.LUser.setToken(res.token),
      this.LUser.setUsername(res.user.username),
      this.LUser.setEmail(res.user.email),
      this.LUser.setRating(res.user.rating),
      this.LUser.setUserid(res.user.userID)

      this.storage.set(user, this.LUser)

      }).then(
      () => {this.authenticationState.next(true);
    })
    .catch(() => this.popup.popup("Username o password errata"));
  }

  logout() {
    return this.storage.remove("user").then(() => {
      this.authenticationState.next(false);
      document.location.reload(true);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  register(rgsuser: string, rgsemail: string, rgspassword: string) {
    this.http.post('http://localhost:8080/api/users/register',
    {
      "username": rgsuser,
	    "email": rgsemail,
	    "password": rgspassword
    },
    { responseType: 'text' }
    ).toPromise().then(()=>this.popup.popup("utente registrato correttamente!"))
    .catch(err => this.popup.popup(err.error));
  }

}
