import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'searchpage', loadChildren: './searchpage/searchpage.module#SearchpagePageModule' },
  { path: 'addpost', loadChildren: './addpost/addpost.module#AddpostPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'profile/yourposts', loadChildren: './yourposts/yourposts.module#YourpostsPageModule'},
  { path: 'profile/yourgroups', loadChildren: './yourgroups/yourgroups.module#YourgroupsPageModule'}
  
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
