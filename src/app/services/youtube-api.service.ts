import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeApiService {
  private baseUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBvimgzW-ZJpVsZrFhUf2Iz479PgRcM2uw';

  constructor(private http: HttpClient) { }

  public getPlaylistItems(id: string, limit: number): Observable<any> {
    const url = `${this.baseUrl}/playlistItems?part=snippet&maxResults=${limit}&playlistId=${id}&key=${this.apiKey}`;

    return this.http.get<any>(url)
    .pipe(
      map(response => response.json()),
    );
  }
}
