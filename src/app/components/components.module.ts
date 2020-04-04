import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';
import { ColorGridComponent } from './colors/color-grid/color-grid.component';
import { PaginacionGridColorComponent } from './colors/paginacion-grid-color/paginacion-grid-color.component';
import { ColorCopyComponent } from './colors/color-copy/color-copy.component';


@NgModule({
  declarations: [ColorsComponent, ColorGridComponent, PaginacionGridColorComponent, ColorCopyComponent, NotFoundComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ColorsComponent, ColorGridComponent, PaginacionGridColorComponent, ColorCopyComponent, NotFoundComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
