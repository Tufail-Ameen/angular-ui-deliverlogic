import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';

// Import Swiper CSS - this is where it should go
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

bootstrapApplication(AppComponent, {
  providers: [provideIonicAngular()],
});