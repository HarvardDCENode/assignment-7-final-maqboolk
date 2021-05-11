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
    console.log(this.apiurl);
    return this.http.get(this.apiurl + '/menu');
  }

  // Api call to get individual item
  getAnItem(itemId: any) {
    return this.http.get(this.apiurl + '/menu/' + itemId);
  }

  // Api call to add an item 
  addAnItem() {
    // item data hacoded for create operation
    let item = {
      name: 'Test Item',
      price: 12.21,
      ingredients: 'one two three',
      available: true
    }
    // Calls an API to create an item with body
    return this.http.post(this.apiurl + '/menu', item);
  }

  deleteAnItem(itemId: any) {
    // Calls a delete API with _id to delete
    return this.http.delete(this.apiurl + '/menu/' + itemId);
  }

}
