import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Event {

    private _eventid: number;
    private _publisher: string;
    private _dateofpublishing: Date;
    private _timeofpublishing: string;
    private _activity: string;
    private _title: string;
    private _details: string;
    private _place: string;
    private _dateofevent: string;
    private _timeofevent: string;
    private _partecipants: string[];
    private _maxpartecipants: number;

  constructor() { }

//========================================================================

get publisher() {
  return this._publisher;
}

set publisher(value: string) {
  this._publisher = value;
}

get dateofpublishing(): Date {
  return this._dateofpublishing;
}

set dateofpublishing(value: Date) {
  this._dateofpublishing = value;
}

get timeofpublishing(): string {
  return this._timeofpublishing;
}

set timeofpublishing(value: string) {
  this._timeofpublishing = value;
}

get activity(): string {
  return this._activity;
}

set activity(value: string) {
  this._activity = value;
}

get title(): string {
  return this._title;
}

set title(value: string) {
  this._title = value;
}

get details(): string {
  return this._details;
}

set details(value: string) {
  this._details = value;
}

get place(): string {
  return this._place;
}

set place(value: string) {
  this._place = value;
}

get dateofevent(): string {
  return this._dateofevent;
}

set dateofevent(value: string) {
  this._dateofevent = value;
}

get timeofevent(): string {
  return this._timeofevent;
}

set timeofevent(value: string) {
  this._timeofevent = value;
}

get maxpartecipants(): number {
  return this._maxpartecipants;
}

set maxpartecipants(value: number) {
  this._maxpartecipants = value;
}

get eventid(): number {
  return this._eventid;
}

set eventid(value: number) {
  this._eventid = value;
}

get partecipants(): string[] {
  return this._partecipants;
}

set partecipants(value: string[]) {
  this._partecipants = value;
}

    


}
