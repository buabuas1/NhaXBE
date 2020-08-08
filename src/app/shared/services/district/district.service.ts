import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {District} from "@app/shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private httpClient: HttpClient) { }

  getListDistrict(): Promise<any> {
    return this.httpClient.get('/api/district').toPromise();
  }

  async save(district: District) {
    return this.httpClient.post('/api/district', district).toPromise();
  }
}
