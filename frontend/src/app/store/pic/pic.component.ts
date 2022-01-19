import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/interfaces/store';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const placeHolder = "/assets/pics/store_placeholder.png"

@Component({
  selector: 'app-store-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss'],
})
export class PicComponent implements OnInit {
  faUniversity = faUniversity

  @Input() store: Store | null = null

  constructor() { }

  ngOnInit(): void {

  }

  get PictureUrl() {
    return this.store?.photo || placeHolder
  }
}
