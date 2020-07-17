import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './components/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './enter/login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './enter/registration/registration.module#RegistrationPageModule' },
  { 
    path: 'justmeet', 
    canActivate: [AuthGuardService],
    loadChildren: './justmeet/member-routing.module#MemberRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
