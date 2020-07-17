import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourpostsPage } from './yourposts.page';

const routes: Routes = [
  {
    path: '',
    component: YourpostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourpostsPageRoutingModule {}
