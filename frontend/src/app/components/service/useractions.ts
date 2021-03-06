import { Injectable } from '@angular/core';
import { Popup } from '../service/popup';
import { HttpClient } from "@angular/common/http";
import { Storage } from '@ionic/storage'


@Injectable({
  providedIn: 'root'
})
export class UserActions {

  user;

  constructor(
    private popup: Popup,
    private http: HttpClient,
    private storage: Storage,
  ) {
    this.storage.get("user").then((res) =>
      this.user = res)
  }

  //====================================================
  

  join(x) {
    this.http.patch("http://localhost:8080/api/posts/" + x + "/join",
      {},
      {
        headers: {
          "auth-token": this.user.token,
        },
        responseType: "text",
      }
    )
      .toPromise()
      .then(() => this.popup.popup("iscritto con successo"))
      .catch((err) => this.leave(x))
  }

  rate(data, x) {
    this.http
      .post(
        "http://localhost:8080/api/rating/" + x,
        {
          rating: data.voto,
        },
        {
          headers: {
            "auth-token": this.user.token,
          },
          responseType: "text",
        }
      )
      .toPromise()
      .then(() => this.popup.popup("Voto pubblicato!"))
      .catch((err) => this.popup.popup(err.error));
  }

  delete(x) {
    this.http
      .delete("http://localhost:8080/api/posts/" + x,
        {
          headers: {
            "auth-token": this.user.token,
          },
          responseType: "text",
        })
      .toPromise()
      .then(() => this.popup.popup("Post archiviato con successo"))
      .catch((err) => this.popup.popup(err.error));
  }

  leave(x) {
    this.http
      .patch(
        "http://localhost:8080/api/posts/" + x + "/leave",
        {},
        {
          headers: {
            "auth-token": this.user.token,
          },
          responseType: "text",
        }
      )
      .toPromise()
      .then(() => this.popup.popup("gruppo abbandonato con successo"))
      .catch((err) => this.popup.popup(err.error));

  }

}