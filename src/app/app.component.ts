import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MENU_NAVBAR_LINK } from "./menu-service-items";
import { NbSidebarService } from "@nebular/theme";
import { AuthService } from "./services/auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AuthGuard } from './guards/auth.guard';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "Fintech Social Network";
  navbarLink = MENU_NAVBAR_LINK;
  
  constructor(private sidebarService: NbSidebarService, private router: Router,
    private AuthService: AuthService) {
    
    }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  get isAuth(): Observable<boolean> {
    return this.AuthService.isAuth;
  }

  logout() {
    this.AuthService.logout()
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
  
}
