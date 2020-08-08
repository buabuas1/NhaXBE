import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomComponent } from './room.component';
import { OnlyAdminUsersGuard } from '../admin/admin-user-guard';

const routes: Routes = [{
  path: '',
  canActivate: [OnlyAdminUsersGuard],
  children: [{
    path: '',
    component: RoomComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoomRoutingModule {}
