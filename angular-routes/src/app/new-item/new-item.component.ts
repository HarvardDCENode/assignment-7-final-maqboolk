import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
  providers: [MenuService]
})
export class NewItemComponent implements OnInit {

  @Output() newItem = new EventEmitter();
  // object to hold new item vlaues as they are updated on form
  item: any = {};

  // Setting Radio button 'No' as default 
  available = '0';
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

  // I was having  issue with boolean value. I was not able to pass boolean value 
  // to  form data so i am using  dummy data to create an  item.
  save(): void {
    this.menuService.addAnItem()
      .subscribe((addedItem) => {
        console.log('Added', addedItem);
        this.newItem.emit();
      });

  }

}
