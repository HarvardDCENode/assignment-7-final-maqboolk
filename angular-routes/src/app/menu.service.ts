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

  // Api call to add an item 
  addAnItem() {
    console.log('addAnItem');
    let item = {
      name: 'Test Item',
      price: 12.21,
      ingredients: 'one  two three',
      available: true
    }
    return this.http.post(this.apiurl + '/menu', item);
  }

}
