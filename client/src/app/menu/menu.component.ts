import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  // holds all the menu items that are received from ngOnInit
  menu = null;

  // Making Service (Menu) available by passing it to constuctor
  constructor(private menuService: MenuService) {

  }

  // using updateItemList() function to avoid duplication of the code.
  ngOnInit(): void {
    this.updateItemList();
  }

  // Getting menu from menuservice using Observer and Subscribe. 
  updateItemList() {
    this.menuService.getAllItems().subscribe((apiMenu) => {
      this.menu = apiMenu;
    })
  }


}
