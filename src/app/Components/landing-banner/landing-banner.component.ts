import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-landing-banner',
  templateUrl: './landing-banner.component.html',
  styleUrls: ['./landing-banner.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class LandingBannerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
