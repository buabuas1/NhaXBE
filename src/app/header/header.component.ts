import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '@app/shared/interfaces';

import {AuthService} from '@app/shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user: User | null = null;
  public items: any[] = [{
    text: 'Danh sách Nhà',
    path: '/house'
  }, {
    text: 'Danh sách Phòng',
    path: '/room'
  }, {
    text: 'Danh sách Chủ nhà',
    path: '/host'
  },
    {
      text: 'Danh sách Ảnh',
      path: '/image'
    }
  ];

  constructor(private router: Router, private authService: AuthService) {
  }

  public onSelect(item: any): void {
    if (item.item) {
      this.router.navigateByUrl(item.item.path);
    }
  }

  logout(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/auth/login');
  }
}
