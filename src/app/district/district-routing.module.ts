import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistrictComponent } from './district.component';
import { OnlyAdminUsersGuard } from '../admin/admin-user-guard';

const routes: Routes = [{
  path: '',
  canActivate: [OnlyAdminUsersGuard],
  children: [{
    path: '',
    component: DistrictComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DistrictRoutingModule {}
