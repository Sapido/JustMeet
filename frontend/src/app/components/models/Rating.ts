import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Rating {

    private _voteID: number;
    private _vote: number;
    private _votedBy: string;

    constructor() { }

    //=====================================================================

    get voteID() {
        return this._voteID;
    }

    set voteID(value: number) {
        this._voteID = value;
    }

    get vote() {
        return this._vote;
    }

    set vote(value: number) {
        this._vote = value;
    }

    get votedBy() {
        return this._votedBy;
    }

    set voteBy(value: string) {
        this._votedBy = value;
    }

}
