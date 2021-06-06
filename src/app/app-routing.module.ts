import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosListComponent } from './videos-list/videos-list.component';

const routes: Routes = [
  {
    path: '',
    component: VideosListComponent
  },
  {
    path: 'videos',
    component: VideosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
