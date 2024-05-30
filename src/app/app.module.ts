import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';
import { ServiceComponent } from './pages/service/service.component';
import { SingleBlogComponent } from './features/single-blog/single-blog.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './features/blog/blog.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
    ServiceComponent,
    SingleBlogComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    TestimonialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
