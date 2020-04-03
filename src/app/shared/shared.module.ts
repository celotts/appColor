
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './components/error404/error404.component';
import { LayoutModule } from '../layout/layout.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [    // optional in your case
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }

}
