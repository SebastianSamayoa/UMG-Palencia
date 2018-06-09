import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BlogComponent } from './blog/blog.component';
import { APP_ROUTES } from './app.routes';
import { Blog1Component } from './blog1/blog1.component';


@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    CabeceraComponent,
    FooterComponent,
    BodyComponent,
    BlogComponent,
    Blog1Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
