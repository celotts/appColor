import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { HttpConfigInterceptor } from './shared/interceptors/httpconfig-interceptors';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    LayoutModule,
    ComponentsModule,
    SharedModule.forRoot(),
  ],
  providers: [
    HttpConfigInterceptor, {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,

      multi: true

    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
