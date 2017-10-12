import { Component, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from '../services/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { YoutubeApiService } from '../services/youtube-api.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit, OnDestroy {

  private playlistId: string;
  private resultJson: any;
  private toastr: ToastsManager;
  private subscription: Subscription;

  constructor(private toastrService: ToastrService, private vcr: ViewContainerRef, private apiService: YoutubeApiService) {
    this.toastr = this.toastrService.manager();
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      console.log('Unsubscribing...')
      this.subscription.unsubscribe();
    }
  }

  private retrievePlaylist(): void {
    if (!this.playlistId) {
      this.toastr.error('Please provide a playlist id');
      return;
    }
    this.toastr.info('Retrieving playlist...');
    this.subscription = this.apiService.getPlaylistItems(this.playlistId, 50).subscribe((data) => {
      this.resultJson = data;
      console.log(data)
    }, error => this.handleError(error));
  }

  handleError(message: any): any {
    console.dir(message);
    this.toastr.error(message);
    this.resultJson = message;
    console.log(this.resultJson);
  }

}
