import { Component, OnInit } from '@angular/core';
import {UserService} from "@app/shared/services/user/user.service";
import {User} from "@app/shared/interfaces";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService) {}

  public async ngOnInit() {
      this.users = await this.userService.getListUser();
  }
}


