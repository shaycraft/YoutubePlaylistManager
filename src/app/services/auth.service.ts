import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _IsAuthenticated: boolean;
  private _authToken: string;

  constructor() {
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
}
