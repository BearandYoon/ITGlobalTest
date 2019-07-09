import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './shared/components/user-list/user-list.component';
import { UserDetailComponent } from './shared/components/user-detail/user-detail.component';

const routes: Routes = [{
  path: '',
  component: UserListComponent
}, {
  path: ':id',
  component: UserDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
