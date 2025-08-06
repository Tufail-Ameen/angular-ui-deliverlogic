import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isReady = false;

  constructor() {
    // Simple, clean navbar component
  }

  ngOnInit() {
    // Ensure all components are loaded before showing
    setTimeout(() => {
      this.isReady = true;
    }, 100);
  }

}
