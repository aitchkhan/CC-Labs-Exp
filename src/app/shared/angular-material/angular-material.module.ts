import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRootModule }from '@angular/material';

//This module injects all the modules from @angular/material
@NgModule({
  imports: [
    CommonModule,
    //MaterialComponents,
    MaterialRootModule
  ],
  exports: [
    MaterialRootModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
