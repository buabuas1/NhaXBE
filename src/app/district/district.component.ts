import {Component, OnInit} from '@angular/core';
import {District} from "@app/shared/interfaces";
import {DistrictService} from "@app/shared/services";
import {ModalService} from "@app/shared/services/modal/modal.service";
import {DistrictDetailComponent} from "@app/district/component/district-detail/district-detail.component";
import {LoggerService} from "@app/shared/services/logger/logger.service";

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  public districts: District[] = [];

  constructor(private districtService: DistrictService,
              private modalService: ModalService,
              private loggerService: LoggerService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.reloadGrid();
  }

  onAddDistrict() {
    this.modalService.openModal({
      title: 'Thêm Quận',
      component: DistrictDetailComponent,
      // isCustomModalHeader: true,
      inputs: [{ key: 'department', value: item }],
      onSubmit: async () => {
        await this.reloadGrid();
      }
    }, { class: 'modal-lg modal-title-status 11', backdrop: 'static' });
  }

  onOpenDetail(item: any) {
    this.modalService.openModal({
      title: 'Cập nhật Quận',
      component: DistrictDetailComponent,
      // isCustomModalHeader: true,
      inputs: [{ key: 'district', value: item.dataItem }],
      onSubmit: async (district: District) => {
        await this.districtService.save(district);
        await this.reloadGrid();
        this.loggerService.success('Thành công');
      }
    }, { class: 'modal-lg modal-title-status 11', backdrop: 'static' });
  }

  private async reloadGrid() {
    this.districts = await this.districtService.getListDistrict();
  }
}
