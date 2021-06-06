import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private _isAuthenticated: boolean;
  private _authToken: string;
  private readonly _validateUrl: string = 'https://www.googleapis.com/oauth2/v3/tokeninfo';

  constructor(private http: HttpClient) {
    this._isAuthenticated = false;
  }

  public isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public setAuthenticated(authValue: boolean): void {
    this._isAuthenticated = authValue;
  }

  public setToken(token: string) {
    this._authToken = token;
    this._isAuthenticated = true;
    console.log('SetToken, token=', token);
  }

  public getToken() {
    return this._authToken;
  }

  public validateToken(token: string): Observable<any> {
    return this.http.get<any>(`${this._validateUrl}?access_token=${token}`)
    .pipe(
      map(res => res.json()),
    );
  }
}
