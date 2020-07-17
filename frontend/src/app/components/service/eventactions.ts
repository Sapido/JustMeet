import { Injectable } from '@angular/core';
import { Popup } from '../service/popup';
import { HttpClient } from "@angular/common/http";
import { Storage } from '@ionic/storage'
import { Observable } from 'rxjs';
import { Event } from '../models/Event'


@Injectable({
    providedIn: 'root'
})
export class EventActions {

    user;

    constructor(
        private http: HttpClient,
        private storage: Storage,
        private event: Event
    ) {
        this.storage.get("user").then((res) => {
            this.user = res
        })
    }

    groupsAddMoreCards() {
        const cards = []
        let data: Observable<any>;
        data = this.http.get("http://localhost:8080/api/users/" + this.user.userid, {
            headers: {
                "auth-token": this.user.token,
            },
        })
        data.subscribe((result) => {
            for (let n in result.postsPartecipating) {
                data = this.http.get("http://localhost:8080/api/posts/" + result.postsPartecipating[n], {
                    headers: {
                        "auth-token": this.user.token,
                    },
                });
                data.subscribe(
                    (res) => cards.splice(0, 0, res)
                );
            }
        });
        return cards;
    }

    postsAddMoreCards() {
        const cards = [];
        let data: Observable<any>;
        data = this.http.get("http://localhost:8080/api/users/" + this.user.userid, {
            headers: {
                "auth-token": this.user.token,
            },
        });
        data.subscribe((result) => {
            for (let n in result.postsCreated) {
                data = this.http.get("http://localhost:8080/api/posts/" + result.postsCreated[n], {
                    headers: {
                        "auth-token": this.user.token,
                    },
                });
                data.subscribe((result) => {
                    cards.splice(0, 0, result);
                });
            }
        });
        return cards
    }

    homeAddMoreCards() {
        const cards = [];
        this.http.get("http://localhost:8080/api/posts", {
            headers: {
                "auth-token": this.user.token
            }
        }).toPromise().then(
            (res: any) => {
                for (const key in res) {
                    const r = res[key];
                    const event = new Event();
                    event.eventid = r.postID;
                    event.publisher = r.publisher;
                    event.dateofpublishing = r.dateOfPublishing;
                    event.timeofpublishing = r.timeOfPublishing;
                    event.partecipants = r.partecipants;
                    event.maxpartecipants = r.maxPartecipants;
                    event.title = r.title;
                    event.activity = r.activity;
                    event.details = r.details;
                    event.place = r.place;
                    event.dateofevent = r.dateOfEvent;
                    event.timeofevent = r.timeOfEvent;
                    cards.push(event);
                }
            }
        )
        return cards;
    }

}