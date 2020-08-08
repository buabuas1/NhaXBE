import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private httpClient: HttpClient) { }

  getListDistrict(): Promise<any> {
    return this.httpClient.get('/api/district').toPromise();
  }
}
