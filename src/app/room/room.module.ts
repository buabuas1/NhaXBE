import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import {RoomRoutingModule} from "@app/room/room-routing.module";
import {OnlyAdminUsersGuard} from "@app/admin/admin-user-guard";



@NgModule({
  declarations: [RoomComponent],
  imports: [
    CommonModule,
    RoomRoutingModule
  ],
  providers: [
    OnlyAdminUsersGuard
  ]
})
export class RoomModule { }
