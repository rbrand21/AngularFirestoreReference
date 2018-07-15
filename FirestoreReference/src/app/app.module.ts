import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import { GetCollectionComponent } from './get-collection/get-collection.component';
import { RouterModule, Routes} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: 'get-collection', component: GetCollectionComponent },
  { path: 'home-page', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GetCollectionComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
