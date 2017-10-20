import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youtube Playlist Manager';
  public IsAuthenticated: boolean;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        let qstringParsed = this.parseQueryString(fragment);
        this.IsAuthenticated = true;
        this.authService.SetToken(qstringParsed.access_token);
      }
      else {
        this.IsAuthenticated = false;
        this.authService.SetAuthenticated(false);
      }
    })
  }

  private parseQueryString(query: string): any {
    let result = {};
    let parts = query.split('&');
    for (let i = 0; i < parts.length; i++) {
      let keyVal = parts[i].split('=');
      result[keyVal[0]] = keyVal[1];
    }
    
    return result;
  }
}
