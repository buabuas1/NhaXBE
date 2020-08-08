import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "@app/shared/interfaces";

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {
  }

  getListUser(): Promise<any> {
    return this.http.get('/api/user')
      .toPromise();
  }
}
