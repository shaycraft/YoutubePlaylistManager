import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private _IsAuthenticated: boolean;
  private _authToken: string;
  private readonly validate_url: string = 'https://www.googleapis.com/oauth2/v3/tokeninfo';

  constructor(private http: HttpClient) {
    this._IsAuthenticated = false;
  }

  public IsAuthenticated(): boolean {
    return this._IsAuthenticated;
  }

  public SetAuthenticated(authValue: boolean): void {
    this._IsAuthenticated = authValue;
  }

  public SetToken(token: string) {
    this._authToken = token;
    this._IsAuthenticated = true;
    console.log('SetToken, token=', token);
  }

  public GetToken() {
    return this._authToken;
  }

  public ValidateToken(token: string): Observable<any> {
    return this.http.get<any>(`${this.validate_url}?access_token=${token}`)
    .pipe(
      map(res => res.json()),
    )
  }
}
