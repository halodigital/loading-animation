import { NgModule } from '@angular/core';
import { HaloLoadingComponent } from './loading-animation.component';


@NgModule({
    declarations: [
        HaloLoadingComponent
    ],
    exports: [
        HaloLoadingComponent
    ]
})

export class HaloLoadingModule {}
