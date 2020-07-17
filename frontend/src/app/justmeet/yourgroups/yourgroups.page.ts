import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AlertController } from "@ionic/angular";
import { Storage } from '@ionic/storage';
import { UserActions } from '../../components/service/useractions'
import { EventActions } from '../../components/service/eventactions'

@Component({
  selector: "app-yourgroups",
  templateUrl: "./yourgroups.page.html",
  styleUrls: ["./yourgroups.page.scss"],
})
export class YourgroupsPage {
  
  cards = [];
  user;

  constructor(
    public http: HttpClient,
    private useractions: UserActions,
    private alertController: AlertController,
    private storage: Storage,
    private eventaction: EventActions
  ) {
    this.storage.get("user").then((res) => {
      this.user = res
      this.cards = this.eventaction.groupsAddMoreCards();
      })
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
          text: "Abbandona",
          handler: () => {
            this.useractions.leave(x.postID)
            setTimeout(() => {
              while (this.cards.length > 0){
                this.cards.pop()
              }
              this.cards = this.eventaction.groupsAddMoreCards();
            }, 500);
          }
        },
      ],
    });

    await alert.present();
  }

}
