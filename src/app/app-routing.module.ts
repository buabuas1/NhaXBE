import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'house',
    loadChildren: () => import('./house/house.module').then(m => m.HouseModule),
  },
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then(m => m.RoomModule),
  },
  {
    path: 'host',
    loadChildren: () => import('./host/host.module').then(m => m.HostModule),
  },
  {
    path: 'image',
    loadChildren: () => import('./image/image.module').then(m => m.ImageModule),
  },
  {
    path: 'district',
    loadChildren: () => import('./district/district.module').then(m => m.DistrictModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
