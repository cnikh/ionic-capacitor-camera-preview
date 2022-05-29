import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-camera-demo',
  templateUrl: './camera-demo.page.html',
  styleUrls: ['./camera-demo.page.scss'],
})
export class CameraDemoPage implements OnInit {

  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,
              public photoService: PhotoService) { }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }


addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
}
