import { Component, OnInit } from '@angular/core';
import {UserService} from "@app/shared/services/user/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) {}

  public async ngOnInit() {
    let user = await this.userService.getListUser();
    console.log(user);
  }
}


