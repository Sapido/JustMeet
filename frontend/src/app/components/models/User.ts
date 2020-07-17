import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

    private token: string;
    private username: string;
    private email: string;
    private rating: number;
    private userid: number;

  constructor() { }







//=====================================================================

    getToken() {
        return this.token
    }

    setToken(x) {
        this.token = x;
    }

    getUsername() {
        return this.username
    }

    setUsername(x) {
        this.username = x;
    }

    getEmail() {
        return this.email
    }

    setEmail(x) {
        this.email = x;
    }

    getRating() {
        return this.rating
    }

    setRating(x) {
        this.rating = x;
    }

    getUserid() {
        return this.userid
    }

    setUserid(x) {
        this.userid = x;
    }


}
