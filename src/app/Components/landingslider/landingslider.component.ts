import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicSlides } from '@ionic/angular/standalone';
import { Autoplay } from 'swiper/modules';

// Import Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

@Component({
  standalone: true,
  selector: 'app-landingslider',
  imports: [CommonModule],
  templateUrl: './landingslider.component.html',
  styleUrls: ['./landingslider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingsliderComponent  implements OnInit {
  swiperModules = [IonicSlides, Autoplay];

  constructor() { }

  ngOnInit() {}

}
