import { Component, OnInit, isDevMode } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Youtube Playlist Manager';
  public IsAuthenticated: boolean;
  public oauth_url: string;


  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private toastr: ToastsManager) {

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        let qstringParsed = this.parseQueryString(fragment);

        // validate token
        this.authService.ValidateToken(qstringParsed.access_token)
          .subscribe((res) => {
            this.IsAuthenticated = true;
            this.authService.SetToken(qstringParsed.access_token);
            this.toastr.success('Token validated successfully');
            console.log(res);
          }, err => this.handleError(err));
      }
      else {
        this.IsAuthenticated = false;
        this.authService.SetAuthenticated(false);
      }
    })
  }

  public ngOnInit(): void {
    if (isDevMode()) {
      this.oauth_url = "https://accounts.google.com/o/oauth2/v2/auth?client_id=769089562908-q38pfih651l28ikrd8b1h5aif80bl1kf.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4200&response_type=token&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube";
    }
    else {
      this.oauth_url = "https://accounts.google.com/o/oauth2/v2/auth?client_id=769089562908-q38pfih651l28ikrd8b1h5aif80bl1kf.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Fsamhaycraft.net%2FYoutube&response_type=token&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube";
    }
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

  private handleError(err: any): void {
    this.toastr.error(`ERROR:  ${err}`);
  }
}
