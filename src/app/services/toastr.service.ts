import { Injectable } from '@angular/core';
@Injectable()
export class ToastrService {

  constructor() { }

  public manager() {
    return {
      warn: (msg: string) => console.debug(`WARN: ${msg}`),
      info: (msg: string) => console.debug(`INFO: ${msg}`),
      success: (msg: string) => console.debug(`SUCCESS: ${msg}`),
      error: (msg: string) => console.error(`ERROR-6000: ${msg}`),
    };
  }
}
