import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../components/models/User";
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';

import { Popup } from '../../components/service/popup';


@Component({
  selector: "app-addpost",
  templateUrl: "./addpost.page.html",
  styleUrls: ["./addpost.page.scss"],
})
export class AddpostPage implements OnInit {


  title;
  activity;
  details;
  place;
  maxPartecipants;
  dateOfEvent;
  timeOfEvent;
  
  user;
  todaydate: String = new Date().toISOString();

  constructor(
    private LUser: User,
    private http: HttpClient,
    private storage: Storage,
    private popup: Popup
  ) {
    this.storage.get("user").then((res) =>
    this.user = res  
  )
  }

  ngOnInit() {}

  createPost() {
    let data: Observable<any>;
    data = this.http.post(
      'http://localhost:8080/api/posts',
      {
        title: this.title,
        activity: this.activity,
        details: this.details,
        place: this.place,
        maxPartecipants: this.maxPartecipants,
        dateOfEvent: this.dateOfEvent,
        timeOfEvent: this.timeOfEvent,
      },
      {
        headers: {
          'auth-token': this.user.token,
        },
        responseType: 'text'
      }
    );
    data.subscribe(
        (res) => this.popup.popup("Post creato con successo"),
        (err) => this.popup.popup(err.error)
    );

  }
}
