import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourpostsPageRoutingModule } from './yourposts-routing.module';

import { YourpostsPage } from './yourposts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourpostsPageRoutingModule
  ],
  declarations: [YourpostsPage]
})
export class YourpostsPageModule {}
