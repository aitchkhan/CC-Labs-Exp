import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialRootModule }from '@angular/material';
import { HttpModule } from '@angular/http';
import { AppLayoutComponent } from './templates/app-layout/app-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadModule } from "ng2-file-upload";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialRootModule,
    HttpModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialRootModule,
    HttpModule,
    AppLayoutComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  declarations: [AppLayoutComponent]
})
export class SharedModule { }
