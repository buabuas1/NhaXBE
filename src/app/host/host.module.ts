import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './host.component';
import {HostRoutingModule} from "@app/host/host-routing.module";
import {OnlyAdminUsersGuard} from "@app/admin/admin-user-guard";



@NgModule({
  declarations: [HostComponent],
  imports: [
    CommonModule,
    HostRoutingModule
  ],
  providers: [
    OnlyAdminUsersGuard
  ]
})
export class HostModule { }
