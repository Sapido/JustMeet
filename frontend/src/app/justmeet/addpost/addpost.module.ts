import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpostPageRoutingModule } from './addpost-routing.module';

import { AddpostPage } from './addpost.page';
import { DatePickerModule } from 'ionic4-date-picker';
import { BotbarComponentModule } from '../../components/botbar/botbar.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotbarComponentModule,
    AddpostPageRoutingModule,
    DatePickerModule
  ],
  declarations: [AddpostPage]
})
export class AddpostPageModule {}
