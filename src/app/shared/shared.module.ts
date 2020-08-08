import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import {MenusModule} from "@progress/kendo-angular-menu";
import { ModalComponent } from './component/modal/modal.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import {BsModalService, ModalModule} from "ngx-bootstrap";

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTreeModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    MenusModule,
    [ModalModule.forRoot()]
  ],
  declarations: [ModalComponent, ConfirmComponent],
  providers: [
    BsModalService
  ]
})
export class SharedModule {}
