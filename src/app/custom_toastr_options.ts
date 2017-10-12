import { ToastOptions } from 'ng2-toastr/ng2-toastr';

export class CustomToastrOptions extends ToastOptions {
    newestOnTop = true;
    showCloseButton = false;
}