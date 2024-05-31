import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './features/portfolio/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './features/portfolio/portfolio-details/portfolio-details.component';
import { ServiceComponent } from './pages/service/service.component';
import { SingleBlogComponent } from './features/blogs/single-blog/single-blog.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './features/blogs/blog/blog.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PortfolioGalleryComponent } from './features/portfolio/components/portfolio-gallery/portfolio-gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CommonModule } from '@angular/common';

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
    PortfolioGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NgxMasonryModule,
    CommonModule
  ],
  providers: [ provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
