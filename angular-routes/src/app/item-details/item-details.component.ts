import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  providers: [MenuService]
})
export class ItemDetailsComponent implements OnInit {

  itemDetails = null;

  // Making Service (Menu) available by passing it to constuctor
  constructor(private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.menuService.getAnItem(id).subscribe((itemData) => {
      this.itemDetails = itemData;
      console.log(this.itemDetails);
    })
  }

}
