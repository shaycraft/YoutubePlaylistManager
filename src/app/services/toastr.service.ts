import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastrService {

  constructor(private toastr: ToastsManager) { }

  public manager(): ToastsManager {
    return this.toastr;
  }
}
