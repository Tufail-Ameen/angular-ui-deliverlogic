import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  // Properties
  isReady = false;
  isRestaurantPage = false;

  constructor(private router: Router) { }

  navigatetohome() {
    this.router.navigate(['/']);
  }


  ngOnInit() {
    // Check current route
    this.checkCurrentRoute();

    // Ensure all components are loaded before showing
    setTimeout(() => {
      this.isReady = true;
    }, 100);
  }

  checkCurrentRoute() {
    const currentUrl = this.router.url;
    this.isRestaurantPage = currentUrl.includes('/resturant-page');
  }
}
