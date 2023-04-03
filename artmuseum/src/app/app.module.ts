import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './core/about/about.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionComponent } from './exibitions/new-exibition/new-exibition.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './exibitions/card/card.component';
import { ExibitionPageComponent } from './exibitions/exibition-page/exibition-page.component';
import { ArtworkItemComponent } from './exibitions/exibition-page/artwork-item/artwork-item.component';
import { ArtworkEditComponent } from './exibitions/exibition-page/artwork-edit/artwork-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
    AboutComponent,
    ExibitionsComponent,
    NewExibitionComponent,
    NavBarComponent,
    CardComponent,
    ExibitionPageComponent,
    ArtworkItemComponent,
    ArtworkEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
