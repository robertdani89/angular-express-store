import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { InfoComponent } from './info/info.component';
import { RatingsComponent } from './ratings/ratings.component';
import { PicComponent } from './pic/pic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndicatorComponent } from './ratings/indicator/indicator.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewRatingComponent } from './ratings/new-rating-form/new-rating-form.component';
import { RatingComponent } from './ratings/rating/rating.component';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        StoreComponent,
        InfoComponent,
        RatingsComponent,
        PicComponent,
        IndicatorComponent,
        NewRatingComponent,
        RatingComponent,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StoreModule { }
