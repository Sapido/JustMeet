import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AlertController } from "@ionic/angular";
import { Storage } from '@ionic/storage';
import { UserActions } from '../../components/service/useractions';
import { EventActions } from 'src/app/components/service/eventactions';

@Component({
  selector: "app-yourposts",
  templateUrl: "./yourposts.page.html",
  styleUrls: ["./yourposts.page.scss"],
})
export class YourpostsPage {

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
      this.cards = this.eventaction.postsAddMoreCards();
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
          cssClass: "secondary",
        },
        {
          text: "Archivia",
          handler: () => {
            this.useractions.delete(x.postID)
            setTimeout(() => {
              while (this.cards.length > 0){
                this.cards.pop()
              }
              this.cards = this.eventaction.postsAddMoreCards();
            }, 500);
          }
        },
      ],
    });

    await alert.present()
    
  }
}
