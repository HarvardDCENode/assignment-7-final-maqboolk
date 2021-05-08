import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  menu = null;

  // Making Service (Menu) available by passing it to constuctor
  constructor(private menuService: MenuService) {

  }

  // Getting menu form menuservice using Observer and Subscribe. 
  ngOnInit(): void {
    this.menuService.getAllItems().subscribe((apiMenu) => {
      this.menu = apiMenu;
    })
  }

}
