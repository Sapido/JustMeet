import { Component, OnInit, Query } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AlertController } from "@ionic/angular";
import { Storage } from '@ionic/storage';
import { RatingAction } from '../../components/service/ratingaction' 
;
@Component({
  selector: "app-searchpage",
  templateUrl: "./searchpage.page.html",
  styleUrls: ["./searchpage.page.scss"],
})
export class SearchpagePage {
  
  user;
  users: any = [];
  arr: any[]=[];

  constructor(
    public http: HttpClient,
    public alertController: AlertController,
    private storage: Storage,
    private ratingaction: RatingAction
  ) {
    this.storage.get("user").then((res) => {
      this.user = res
      this.usrs()
      })
  }

  usrs() {
    let data: Observable<any>;
    data = this.http.get("http://localhost:8080/api/users", {
      headers: {
        "auth-token": this.user.token,
      },
    });
    data.subscribe((result) => {
      this.users = result;
    });
  }

  filter(ev: any) {
    this.arr = this.users
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.arr = this.users.filter((item) => {
        return (item.username.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }

  async rate(x) {
    const alert = await this.alertController.create({
      header: x.username,
      subHeader: "dagli un voto in base alla tua esperienza",
      inputs: [{ name: "voto", type: "number", min: 0, max: 10 }],
      buttons: [
        {
          text: "annulla",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Vota",
          handler: (data) => {
            this.ratingaction.rated(data, x.userID)
          }
        },
      ],
    });

    await alert.present();
  }
}
