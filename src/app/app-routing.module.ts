import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './publicComponents/home-page/home-page.component'
import { GalleryComponent } from './publicComponents/gallery/gallery.component';
import {HistoryComponent} from './publicComponents/history/history.component';


const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  {path: '', component: HomePageComponent},
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
