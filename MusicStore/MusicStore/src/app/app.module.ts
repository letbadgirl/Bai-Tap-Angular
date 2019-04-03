import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { RestService } from './services/rest.service';
import { HeadComponent } from './components/share/head/head.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/share/loading/loading.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { NoImgPipe } from './pipes/no-img.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    HeadComponent,
    CardComponent,
    LoadingComponent,
    SafeUrlPipe,
    NoImgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
