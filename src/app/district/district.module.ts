import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district.component';
import {OnlyAdminUsersGuard} from "@app/admin/admin-user-guard";
import {DistrictRoutingModule} from "@app/district/district-routing.module";
import {GridModule} from "@progress/kendo-angular-grid";
import {ModalService} from "@app/shared/services/modal/modal.service";
import { DistrictDetailComponent } from './component/district-detail/district-detail.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [DistrictComponent, DistrictDetailComponent],
    imports: [
        CommonModule,
        DistrictRoutingModule,
        GridModule,
        FormsModule
    ],
  providers: [
    OnlyAdminUsersGuard,
    ModalService
  ]
})
export class DistrictModule { }
