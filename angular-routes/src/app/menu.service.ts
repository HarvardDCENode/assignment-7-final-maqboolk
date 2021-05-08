import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  apiurl = environment.apiurl;  //environment variable for url
  constructor(private http: HttpClient) { }

  // Api call to get all items
  getAllItems() {
    return this.http.get(this.apiurl + '/menu');
  }

  // Api call to get individual item
  getAnItem(itemId) {
    return this.http.get(this.apiurl + '/menu/' + itemId);
  }

}
