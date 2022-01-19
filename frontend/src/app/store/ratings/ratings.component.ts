import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/interfaces/store';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {
  faBullhorn = faBullhorn

  @Input() store: Store | null = null
  constructor() { }

  get OrderedStoreRatings() {
    return this.store?.ratings.sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime())
  }
}
