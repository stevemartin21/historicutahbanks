
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { GalleryComponent } from './publicComponents/gallery/gallery.component';
import { NavigationComponent } from './publicComponents/navigation/navigation.component';
import { FooterComponent } from './publicComponents/footer/footer.component';
import { HistoryComponent } from './publicComponents/history/history.component';
import { JumbotronComponent } from './publicComponents/jumbotron/jumbotron.component';
import { FeaturesComponent } from './publicComponents/features/features.component';
import { ProjectsComponent } from './publicComponents/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './publicComponents/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavigationComponent,
    FooterComponent,
    HistoryComponent,
    JumbotronComponent,
    FeaturesComponent,
    ProjectsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    AppRoutingModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
