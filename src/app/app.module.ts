import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import '@capacitor-community/camera-preview';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {CameraPreviewWeb} from '@capacitor-community/camera-preview/dist/esm/web';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [CameraPreviewWeb, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
