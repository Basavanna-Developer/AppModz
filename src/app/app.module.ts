import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CareersComponent } from './careers/careers.component';
import { ProjectsComponent } from './projects/projects.component';
import { SubsidariesComponent } from './subsidaries/subsidaries.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { HeaderRouteNavComponent } from './header-route-nav/header-route-nav.component';
import { ChairmanComponent } from './chairman/chairman.component';
import { HomepageYoutubeComponent } from './homepage-youtube/homepage-youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactusComponent,
    CareersComponent,
    ProjectsComponent,
    SubsidariesComponent,
    AboutusComponent,
    routingComponents,
    HeaderNavComponent,
    HomeComponent,
    VideoBannerComponent,
    HeaderRouteNavComponent,
    ChairmanComponent,
    HomepageYoutubeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
