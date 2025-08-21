import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Autoplay } from 'swiper/modules';



@Component({
  selector: 'app-resturants-slider',
  templateUrl: './resturants-slider.component.html',
  styleUrls: ['./resturants-slider.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResturantsSliderComponent implements OnInit {
  swiperModules = [Autoplay];


  constructor() { }

  ngOnInit() { }

}
