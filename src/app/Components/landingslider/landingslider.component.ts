import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Autoplay, EffectFade } from 'swiper/modules';

@Component({
  standalone: true,
  selector: 'app-landingslider',
  imports: [CommonModule, IonicModule],
  templateUrl: './landingslider.component.html',
  styleUrls: ['./landingslider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingsliderComponent  implements OnInit {
  swiperModules = [EffectFade, Autoplay];

  constructor() { }

  ngOnInit() {}

}
