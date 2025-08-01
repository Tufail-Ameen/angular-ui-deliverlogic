import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

// Register Swiper web components
register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit {

  ngAfterViewInit() {
    console.log('SliderComponent view initialized');
    // Initialize Swiper after view init
    setTimeout(() => {
      this.initSwiper();
    }, 100);
  }

  private initSwiper() {
    console.log('Initializing Swiper...');
    const swiperEl = document.querySelector('swiper-container');
    console.log('Swiper element found:', swiperEl);
    
    if (swiperEl) {
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          clickable: true,
        },
        navigation: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        },
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
      console.log('Swiper initialized successfully');
    } else {
      console.error('Swiper container not found');
    }
  }
} 
