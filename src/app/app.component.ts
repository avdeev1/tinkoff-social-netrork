import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MENU_NAVBAR_LINK } from './menu-service-items';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.less'],
 
})
export class AppComponent {
  title = 'Fintech Social Network';
  navbarLink = MENU_NAVBAR_LINK;
  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
