import { Injectable } from '@angular/core';
import { Popup } from '../service/popup';
import { HttpClient } from "@angular/common/http";
import { Storage } from '@ionic/storage'


@Injectable({
    providedIn: 'root'
})
export class RatingAction {

    user;

    constructor(
        private popup: Popup,
        private http: HttpClient,
        private storage: Storage,
    ) {
        this.storage.get("user").then((res) =>
            this.user = res)
    }

    //==============================================================

    rated(data, x) {
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

}