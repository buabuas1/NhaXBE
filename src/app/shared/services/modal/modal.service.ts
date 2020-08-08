
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap';
import { ConfirmComponent, IConfirmOptions } from '@app/shared/component/confirm/confirm.component';
import {ModalConfig} from './modal-config.modal';
import {ModalComponent} from "@app/shared/component/modal/modal.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: BsModalService) {
  }

  openModal(config: ModalConfig, options?: ModalOptions): BsModalRef {
    let bsModalRef: BsModalRef;

    bsModalRef = this.modalService.show(ModalComponent, options);
    bsModalRef.content.config = config;

    // this.subscriber = this.modalService.onHide.subscribe(() => {
    //     if (config.onClose) {
    //         config.onClose();
    //     }
    //     this.subscriber.unsubscribe();
    // });

    return bsModalRef;
  }

  confirm(options: IConfirmOptions): Observable<any> {
    return new Observable(obs => {
      this.openModal({
        title: options.title || '',
        component: ConfirmComponent,
        inputs: [{
          key: 'options',
          value: options
        }],
        onSubmit: ({val}: { val: any }) => {
          obs.next(val || true);
        },
        onClose: () => {
          obs.next(false);
        }
      }, {
        class: 'modal-confirm',
        ignoreBackdropClick: options.ignoreBackdropClick
      });
    });
  }
}
