import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// third party
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { ToastrService } from './services/toastr.service';
import { CustomToastrOptions } from './custom_toastr_options';
import { YoutubeApiService } from './services/youtube-api.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    ToastrService,
    { provide: ToastOptions, useClass: CustomToastrOptions },
    YoutubeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
