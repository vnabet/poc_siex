import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private _backLink:string = '';
  private _title:string = '';

  public get backLink():string {
    return this._backLink;
  };
  public get pageTitle():string {
    return this._title;
  }

  constructor() { }

  update(title:string, backLink:string = '') {
    this._backLink = backLink;
    this._title = title;
  }
}
