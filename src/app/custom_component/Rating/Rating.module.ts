import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    IonicModule
} from '@ionic/angular';
import {
    ApperyioTranslateModule
} from '../../scripts/apperyio/translate_module';
import {
    ApperyioDeclarablesModule
} from '../../scripts/apperyio/declarables/apperyio.declarables.module';
import {
    Rating
} from './Rating';
import {
    PipesModule
} from '../../scripts/pipes.module';
import {
    DirectivesModule
} from '../../scripts/directives.module';
import {
    ComponentsModule
} from '../../scripts/components.module';
import {
    CustomModulesModule
} from '../../scripts/custom-modules.module';
import {
    NgRatingBarModule
} from 'ng-rating-bar';
@NgModule({
    declarations: [
        Rating
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        ApperyioDeclarablesModule,
        CustomModulesModule, NgRatingBarModule, RouterModule,
        ApperyioTranslateModule
    ],
    exports: [
        Rating
    ],
    entryComponents: [
        Rating
    ]
})
export class RatingComponentModule {}