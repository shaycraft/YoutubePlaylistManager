import { Injectable } from '@angular/core';
@Injectable()
export class ToastrService {

  constructor() { }

  public manager() {
    return {
      warn: () => {},
      info: () => {},
      success: () => {},
      error: () => {},
    };
  }
}
