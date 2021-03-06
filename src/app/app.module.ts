import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SingleUserComponent } from './single-user/single-user.component';
import { SingleRepoComponent } from './single-repo/single-repo.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './404-Not-Found/page-not-found/page-not-found.component';
import { TimeElapsedPipe } from './time-elapsed-pipe/time-elapsed.pipe';
import { AboutComponent } from './about/about.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ZoomInDirective } from './zoom-in-directive/zoom-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SearchPageComponent,
    SearchBarComponent,
    SingleUserComponent,
    SingleRepoComponent,
    FooterComponent,
    PageNotFoundComponent,
    TimeElapsedPipe,
    AboutComponent,
    ZoomInDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgHttpLoaderModule.forRoot(),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
