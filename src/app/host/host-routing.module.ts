import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HostComponent } from './host.component';
import { OnlyAdminUsersGuard } from '../admin/admin-user-guard';

const routes: Routes = [{
  path: '',
  canActivate: [OnlyAdminUsersGuard],
  children: [{
    path: '',
    component: HostComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HostRoutingModule {}
