import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';
import { ColorGridComponent } from './colors/color-grid/color-grid.component';
import { FooterGridColorComponent } from './colors/footer-grid-color/footer-grid-color.component';


@NgModule({
  declarations: [ColorsComponent, ColorGridComponent, FooterGridColorComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [ColorsComponent, ColorGridComponent, FooterGridColorComponent],

})
export class ComponentsModule { }
