import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  DoCheck,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import * as R from 'ramda'
import {ModalConfig} from "@app/shared/services/modal/modal-config.modal";

@Component({
  selector: 'kv-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck {
  @ViewChild('modalBody', {read: ViewContainerRef})
  bodyContent!: ViewContainerRef;

  @Input() public config: ModalConfig = {
    title: '',
    template: ''
  };
  public cmpRef!: ComponentRef<any>;

  private isViewInitialized = false;
  private inputPassed = false;

  constructor(
    public bsModalRef: BsModalRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.isViewInitialized = true;
    this.initialModal();
  }

  ngOnDestroy(): void {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  ngDoCheck(): void {
    if (!this.inputPassed && this.config.title.length > 0) {
      this.initialModal();
      this.inputPassed = true;
    }
  }

  initialModal(): void {
    if (!this.isViewInitialized) {
      return;
    }

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    if (this.config.component) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(this.config.component);
      this.cmpRef = this.bodyContent.createComponent(factory);
      this.cmpRef.instance.close.subscribe(() => {
        if (this.config.onClose) {
          this.config.onClose();
        }

        this.bsModalRef.hide();
      });
      this.cmpRef.instance.submit.subscribe((data: any) => {
        if (this.config.onSubmit) {
          this.config.onSubmit(data);
        }

        this.bsModalRef.hide();
      });

      if (this.config.inputs && this.config.inputs.length > 0) {
        for (let i = 0; i < this.config.inputs.length; i++) {
          const item = this.config.inputs[i];
          this.cmpRef.instance[item.key] = R.clone(item.value);
        }
      }

      if (this.config.outputs && this.config.outputs.length > 0) {
        for (let i = 0; i < this.config.outputs.length; i++) {
          const item = this.config.outputs[i];
          this.cmpRef.instance[item.key].subscribe((data: any) => {
            if (item.value && typeof item.value === 'function') {
              item.value(data);
            }
          });
        }
      }
    }
  }

  public close(): void {
    if (this.cmpRef.instance.onModalClose) {
      this.cmpRef.instance.onModalClose();
    }

    if (this.config.onModalClose) {
      this.config.onModalClose();
    }

    this.bsModalRef.hide();
  }
}
