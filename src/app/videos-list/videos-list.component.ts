import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from '../services/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { YoutubeApiService } from '../services/youtube-api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit, OnDestroy {

  public playlistId: string;
  public resultJson: any;
  private toastr: any;
  private subscription: Subscription;

  constructor(private toastrService: ToastrService, private apiService: YoutubeApiService, private authService: AuthService) {
    this.toastr = this.toastrService.manager();
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      console.log('In videos-list.component, is authenticated, token=', this.authService.getToken());
    }

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      console.log('Unsubscribing...');
      this.subscription.unsubscribe();
    }
  }

  public retrievePlaylist(): void {
    if (!this.playlistId) {
      this.toastr.error('Please provide a playlist id');
      return;
    }
    this.toastr.info('Retrieving playlist...');
    this.subscription = this.apiService.getPlaylistItems(this.playlistId, 50).subscribe((data) => {
      this.resultJson = data;
      console.log(data);
    }, error => this.handleError(error));
  }

  handleError(message: any): any {
    console.dir(message);
    this.toastr.error(message);
    this.resultJson = message;
    console.log(this.resultJson);
  }

}
