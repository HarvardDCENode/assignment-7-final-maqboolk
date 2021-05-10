import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  // used for item passed from parent
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
