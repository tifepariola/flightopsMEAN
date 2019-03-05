import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private userSubscription: Subscription;
  public user: any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if(!this.authService.loggedIn()) this.navigate('/auth/login');
  }

  public ngOnInit() {

    // init this.user on startup
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });

    // update this.user after login/register/logout
    this.userSubscription = this.authService.$userSource.subscribe((user) => {
      this.user = user;
    });
  }
  ngOnDestroy() { 
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  logout(): void {
    this.authService.signOut();
    this.navigate('/auth/login');
  }
  navigate(link): void {
    this.router.navigate([link]);
  }
}
