import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraDemoPage } from './camera-demo.page';

const routes: Routes = [
  {
    path: '',
    component: CameraDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraDemoPageRoutingModule {}
