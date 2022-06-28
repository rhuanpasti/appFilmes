import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
