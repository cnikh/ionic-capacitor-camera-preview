import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraDemoPageRoutingModule } from './camera-demo-routing.module';

import { CameraDemoPage } from './camera-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraDemoPageRoutingModule
  ],
  declarations: [CameraDemoPage]
})
export class CameraDemoPageModule {}
