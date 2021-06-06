import { Injectable } from '@angular/core';
@Injectable()
export class ToastrService {

  constructor() { }

  public manager() {
    return {
      /* eslint-disable-next-line */
      warn: (msg: string) => console.debug(`WARN: ${msg}`),
      /* eslint-disable-next-line */
      info: (msg: string) => console.debug(`INFO: ${msg}`),
      /* eslint-disable-next-line */
      success: (msg: string) => console.debug(`SUCCESS: ${msg}`),
      error: (msg: string) => console.error(`ERROR-6000: ${msg}`),
    };
  }
}
