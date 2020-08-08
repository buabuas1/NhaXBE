import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import {ImageRoutingModule} from "@app/image/image-routing.module";
import {OnlyAdminUsersGuard} from "@app/admin/admin-user-guard";



@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    ImageRoutingModule
  ],
  providers: [
    OnlyAdminUsersGuard
  ]
})
export class ImageModule { }
