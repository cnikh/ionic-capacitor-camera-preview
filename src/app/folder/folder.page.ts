import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PreviewPage } from '../preview/preview.page';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  image = null;
  constructor(private modal: ModalController) {}
  async openCamera() {
    const modal = await this.modal.create({
      component: PreviewPage,
      cssClass: '',
      animated: true
    });
     await modal.present();
    modal.onDidDismiss().then((data) => {
      console.log('OnSuccess');
      console.log(data);
      if (data !== null) {
        this.image = data.data;
      }
    });
  }

}
