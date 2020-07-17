import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchpagePageRoutingModule } from './searchpage-routing.module';

import { SearchpagePage } from './searchpage.page';
import { BotbarComponentModule } from '../../components/botbar/botbar.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotbarComponentModule,
    SearchpagePageRoutingModule
  ],
  declarations: [SearchpagePage]
})
export class SearchpagePageModule {}
