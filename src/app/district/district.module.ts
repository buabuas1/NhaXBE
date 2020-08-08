import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district.component';
import {OnlyAdminUsersGuard} from "@app/admin/admin-user-guard";
import {DistrictRoutingModule} from "@app/district/district-routing.module";
import {GridModule} from "@progress/kendo-angular-grid";



@NgModule({
  declarations: [DistrictComponent],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    GridModule
  ],
  providers: [
    OnlyAdminUsersGuard
  ]
})
export class DistrictModule { }
