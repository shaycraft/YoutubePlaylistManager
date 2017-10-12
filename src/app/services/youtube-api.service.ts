import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeApiService {
  private baseUrl = 'https://www.googleapis.com/youtube/v3';
  private api_key = 'AIzaSyBvimgzW-ZJpVsZrFhUf2Iz479PgRcM2uw';

  constructor(private http: Http) { }

  public getPlaylistItems(id: string, limit: number): Observable<any> {
    let url: string = `${this.baseUrl}/playlistItems?part=snippet&maxResults=${limit}&playlistId=${id}&key=${this.api_key}`;

    return this.http.get(url)
      .map((response) => {
        return response.json();
      });
  }
}
