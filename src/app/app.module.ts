import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { ToastrService } from './services/toastr.service';
import { YoutubeApiService } from './services/youtube-api.service';
import { AuthService } from './services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent
  ],
  imports: [
    BrowserModule,
    // ToastModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientTestingModule,
  ],
  providers: [
    ToastrService,
    // { provide: ToastOptions, useClass: CustomToastrOptions },
    YoutubeApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
