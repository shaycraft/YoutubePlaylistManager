import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  private playlistId: string;
  private responseJson: string;

  constructor() { }

  ngOnInit() {
  }

  private retrievePlayList(): void {
    
  }

}
