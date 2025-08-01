import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

// Register Swiper web components
register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit, OnInit {
  private imagesLoaded = 0;
  private totalImages = 4;
  public swiperInitialized = false;

  ngOnInit() {
    // Preload images
    this.preloadImages();
  }

  ngAfterViewInit() {
    console.log('SliderComponent view initialized');
    // Wait for images to load before initializing Swiper
    this.waitForImagesToLoad();
  }

  onImageLoad() {
    console.log('Image loaded from template');
    this.imagesLoaded++;
    this.checkIfReadyToInitialize();
  }

  onImageError(event: any) {
    console.error('Image failed to load from template:', event);
    this.imagesLoaded++;
    this.checkIfReadyToInitialize();
  }

  private preloadImages() {
    const imageUrls = [
      'assets/images/slider1.webp',
      'assets/images/slider2.webp',
      'assets/images/slider3.webp',
      'assets/images/slider4.webp'
    ];

    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Image ${index + 1} loaded successfully`);
        this.imagesLoaded++;
        this.checkIfReadyToInitialize();
      };
      img.onerror = () => {
        console.error(`Failed to load image ${index + 1}: ${url}`);
        this.imagesLoaded++;
        this.checkIfReadyToInitialize();
      };
      img.src = url;
    });
  }

  private checkIfReadyToInitialize() {
    if (this.imagesLoaded >= this.totalImages && !this.swiperInitialized) {
      console.log('All images loaded, initializing Swiper...');
      this.initSwiper();
    }
  }

  private waitForImagesToLoad() {
    // Fallback: if images take too long, initialize anyway
    setTimeout(() => {
      if (!this.swiperInitialized) {
        console.log('Timeout reached, initializing Swiper anyway...');
        this.initSwiper();
      }
    }, 3000); // 3 second timeout
  }

  private initSwiper() {
    if (this.swiperInitialized) {
      return; // Prevent double initialization
    }

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
        // Add error handling for slides
        on: {
          slideChange: () => {
            console.log('Slide changed');
          },
          slideChangeTransitionEnd: () => {
            console.log('Slide transition ended');
          },
          imagesReady: () => {
            console.log('Swiper images ready');
          }
        }
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
      this.swiperInitialized = true;
      console.log('Swiper initialized successfully');
    } else {
      console.error('Swiper container not found');
    }
  }
} 
