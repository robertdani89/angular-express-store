import { Component, Input } from '@angular/core';
import { Rating } from 'src/app/interfaces/store';
import { faHorseHead } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  faHorseHead = faHorseHead
  @Input() rating: Rating | null = null
  constructor() { }
}
