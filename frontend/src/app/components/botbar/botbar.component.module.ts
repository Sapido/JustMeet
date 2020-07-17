import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BotbarComponent } from './botbar.component';

@NgModule ({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        BotbarComponent
    ],
    exports: [
        BotbarComponent
    ]
})
export class BotbarComponentModule {}
