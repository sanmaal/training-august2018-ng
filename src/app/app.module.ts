import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule,
   MatButtonToggleModule, MatInputModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';
import { ItemInfoComponent } from './item-info/item-info.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { SelectedItemComponent } from './selected-item/selected-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DialogComponent,
    ItemListComponent,
    ItemComponent,
    ItemInfoComponent,
    SelectedItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatInputModule,
    NgxPaginationModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent,
    ItemInfoComponent,
  ],
})
export class AppModule { }
