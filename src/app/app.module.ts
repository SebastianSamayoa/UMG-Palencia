import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BlogComponent } from './blog/blog.component';
import { APP_ROUTES } from './app.routes';

import { Blog2Component } from './blogs/blog2/blog2.component';
import { Blog3Component } from './blogs/blog3/blog3.component';
import { Blog4Component } from './blogs/blog4/blog4.component';
import { Blog5Component } from './blogs/blog5/blog5.component';
import { Blog6Component } from './blogs/blog6/blog6.component';
import { Blog1Component } from './blogs/blog1/blog1.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    CabeceraComponent,
    FooterComponent,
    BodyComponent,
    BlogComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    Blog4Component,
    Blog5Component,
    Blog6Component,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
