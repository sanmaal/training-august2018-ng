import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';
import { DialogComponent } from './dialog/dialog.component';
import { ItemInfoComponent } from './item-info/item-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons',
    component : ItemListComponent,
    children: [
      {
        path: 'registr',
        component: DialogComponent,
      },
      {
        path: 'info',
        component: ItemInfoComponent
      }
    ], },
  { path: 'cathed_pokemons', component : SelectedItemComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
