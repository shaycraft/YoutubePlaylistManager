import { Component, OnInit, isDevMode } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ToastrService } from './services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Youtube Playlist Manager';
  public isAuthenticated: boolean;
  public oAuthUrl: string;
  private toastr;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private mgr: ToastrService) {
    // TODO:  implement ngx-toastr
    this.toastr = mgr.manager();
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        const qstringParsed = this.parseQueryString(fragment);

        // validate token
        this.authService.validateToken(qstringParsed.access_token)
          .subscribe((res) => {
            this.isAuthenticated = true;
            this.authService.setToken(qstringParsed.access_token);
            this.toastr.success('Token validated successfully');
            console.log(res);
          }, err => this.handleError(err));
      } else {
        this.isAuthenticated = false;
        this.authService.setAuthenticated(false);
      }
    });
  }

  public ngOnInit(): void {
    if (isDevMode()) {
      /* eslint-disable-next-line max-len */
      this.oAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=769089562908-q38pfih651l28ikrd8b1h5aif80bl1kf.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4200&response_type=token&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube';
    } else {
      /* eslint-disable-next-line max-len */
      this.oAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=769089562908-q38pfih651l28ikrd8b1h5aif80bl1kf.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Fsamhaycraft.net%2FYoutube&response_type=token&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube';
    }
  }

  private parseQueryString(query: string): any {
    const result = {};
    const parts = query.split('&');

    parts.forEach((part: string) => {
      const keyVal = part.split('=');
      result[keyVal[0]] = keyVal[1];

    });

    return result;
  }

  private handleError(err: any): void {
    this.toastr.error(`ERROR:  ${err}`);
  }
}
