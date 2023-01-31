import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentListItemComponent } from './components/apartment-list-item/apartment-list-item.component';
import { MapControlsComponent } from './components/map-controls/map-controls.component';
import { ApartmentListComponent } from './components/apartment-list/apartment-list.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentListItemComponent,
    MapControlsComponent,
    ApartmentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
