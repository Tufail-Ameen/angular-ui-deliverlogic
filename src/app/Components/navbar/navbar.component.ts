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
  constructor(private router: Router) { }

  navigatetohome() {
    this.router.navigate(['/']);
  }

  isReady = false;

  ngOnInit() {
    // Ensure all components are loaded before showing
    setTimeout(() => {
      this.isReady = true;
    }, 100);
  }

}
