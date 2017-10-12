import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  private playlistId: string;
  private responseJson: string;
  private toastr:  ToastsManager;

  constructor(private toastrService: ToastrService, private vcr: ViewContainerRef) {
    this.toastr = this.toastrService.manager();
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  private retrievePlaylist(): void {
    this.toastr.info('Retrieving playlist...');
  }

}
