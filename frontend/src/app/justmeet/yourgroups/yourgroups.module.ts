import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourgroupsPageRoutingModule } from './yourgroups-routing.module';

import { YourgroupsPage } from './yourgroups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourgroupsPageRoutingModule
  ],
  declarations: [YourgroupsPage]
})
export class YourgroupsPageModule {}
