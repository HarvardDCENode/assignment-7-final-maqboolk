import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/ng-menu', pathMatch: 'full' },
  { path: 'ng-menu', component: MenuComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    ItemDetailsComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
