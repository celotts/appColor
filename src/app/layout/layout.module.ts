import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ColorGridComponent } from '../components/colors/color-grid/color-grid.component';
import { ColorsComponent } from '../components/colors/colors.component';
import { ColorCopyComponent } from '../components/colors/color-copy/color-copy.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ColorsComponent
      },
      {
        path: 'copiar',
        component: ColorCopyComponent
      }
    ]
  }

];

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    SharedModule

  ],
  exports: [LayoutComponent, HeaderComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule
    };
  }

}
