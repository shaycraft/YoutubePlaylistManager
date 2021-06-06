import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from '../services/toastr.service';
import { YoutubeApiService } from '../services/youtube-api.service';
import { AuthService } from '../services/auth.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  public playlistId: string;
  public resultJson$: Observable<any>;
  private toastr: any;

  constructor(private toastrService: ToastrService, private apiService: YoutubeApiService, private authService: AuthService) {
    this.toastr = this.toastrService.manager();
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      console.log('In videos-list.component, is authenticated, token=', this.authService.getToken());
    }

  }

  public retrievePlaylist(): void {
    if (!this.playlistId) {
      this.toastr.error('Please provide a playlist id');
      return;
    }

    this.resultJson$ = this.apiService.getPlaylistItems(this.playlistId, 50)
      .pipe(
        map((res: any) => res.json()),
        catchError((err: any) => this.handleError(err)),
      );
  }

  handleError(message: any): any {
    console.dir(message);
    this.toastr.error(JSON.stringify(message));
    return of(message);
  }

}
