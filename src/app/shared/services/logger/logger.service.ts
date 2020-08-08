import { Injectable } from '@angular/core';
import {ToastrManager} from "ng6-toastr-notifications";
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor(public toastr: ToastrManager) {}

  success(message: string) {
    this.toastr.successToastr(message, 'Success!');
  }

  error(message: string) {
    this.toastr.errorToastr(message, 'Oops!');
  }

  warning(message: string) {
    this.toastr.warningToastr(message, 'Alert!');
  }

  showInfo() {
    this.toastr.infoToastr('This is info toast.', 'Info');
  }

  showToast(position: any = 'top-left') {
    this.toastr.infoToastr('This is a toast.', 'Toast', {
      position: position
    });
  }
}
