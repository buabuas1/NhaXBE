import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house/house.component';
import {HouseRoutingModule} from "@app/house/house-routing.module";
import {OnlyAdminUsersGuard} from "@app/admin/admin-user-guard";



@NgModule({
  declarations: [HouseComponent],
  imports: [
    CommonModule,
    HouseRoutingModule
  ],
  providers: [
    OnlyAdminUsersGuard
  ]
})
export class HouseModule { }
