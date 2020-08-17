import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {OnlyAdminUsersGuard} from './admin-user-guard';
import {GridModule} from "@progress/kendo-angular-grid";
import {UserService} from "@app/shared/services";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    GridModule,
  ],
  providers: [
    OnlyAdminUsersGuard,
    UserService
  ]})
export class AdminModule {}
