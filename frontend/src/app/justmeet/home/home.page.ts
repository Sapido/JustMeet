import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AlertController } from "@ionic/angular";
import { Storage } from '@ionic/storage'
import { delay, map, switchMap, take, tap } from 'rxjs/operators';

import { UserActions } from '../../components/service/useractions';
import { Event } from '../../components/models/Event';
import { EventActions } from '../../components/service/eventactions'

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {

  cards = [];
  user;

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private storage: Storage,
    private useractions: UserActions,
    private eventaction: EventActions
  ) {
    this.storage.get("user").then((res) => {
      this.user = res
      this.cards = this.eventaction.homeAddMoreCards();
    })
  }

  ionViewWillEnter() {
    this.cards = this.eventaction.homeAddMoreCards();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.cards = this.eventaction.homeAddMoreCards();
      event.target.complete();
    }, 2000);
  }

  async moreinfo(x) {
    const alert = await this.alertController.create({
      header: x.title,
      subHeader: "creato da " + x.publisher,
      message: "partecipanti: " + x.partecipants,
      buttons: [
        {
          text: "annulla",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Partecipa o abbandona",
          handler: () => {
            this.useractions.join(x.eventid)
            setTimeout(() => {
              this.cards = this.eventaction.homeAddMoreCards();
            }, 500);
          }
        },
      ],
    });

    await alert.present()
  }


}







