import {
    NgModule
} from '@angular/core';
import {
    RatingComponentModule
} from '../custom_component/Rating/Rating.module';
@NgModule({
    declarations: [],
    exports: [
        RatingComponentModule,
    ],
    imports: []
})
export class CustomComponentsModule {}