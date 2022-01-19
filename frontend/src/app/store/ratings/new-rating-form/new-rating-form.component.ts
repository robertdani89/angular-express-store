import { Component, Input } from '@angular/core';
import { Store } from 'src/app/interfaces/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store-new-rating',
  templateUrl: './new-rating-form.component.html',
  styleUrls: ['./new-rating-form.component.scss']
})
export class NewRatingComponent {
  @Input() store: Store | null = null

  public ratingFormGroup = new FormGroup({
    rating: new FormControl(0, [Validators.min(1), Validators.max(5)]),
    comment: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  constructor(private storeService: StoreService) { }

  handleRaingChange(e: number) {
    this.RatingControl?.patchValue(e)
  }

  get RatingControl() {
    return this.ratingFormGroup.get('rating')
  }

  get CommentControl() {
    return this.ratingFormGroup.get('comment')
  }

  get Rating() {
    return this.RatingControl?.value
  }

  get Comment() {
    return this.CommentControl?.value
  }

  onFormSubmit() {
    if (!this.store?._id) return
    if (this.ratingFormGroup.invalid) return

    const rating = {
      user: "Anonymus",
      rating: this.Rating,
      comment: this.Comment,
    }

    this.storeService.postRating(this.store._id, rating).subscribe(res => {
      this.store?.ratings.push({ ...rating, time: new Date() })
      this.ratingFormGroup.patchValue({ rating: 0, comment: '' })
    })
  }
}
