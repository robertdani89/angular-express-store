import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent {
  faHeart = faHeart
  items = Array(5)

  _ratingNumber = 0
  @Input() set ratingNumber(val: number) {
    this._ratingNumber = val
  }
  @Input() enabled: boolean = true
  @Output() ratingChanged = new EventEmitter()

  handleClick(index: number) {
    if (!this.enabled) return

    this._ratingNumber = index + 1
    this.ratingChanged.emit(this._ratingNumber)
  }
}
