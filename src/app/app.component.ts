import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from "./Pages/landing-page/landing-page.component";
import { register } from 'swiper/element/bundle';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

register();


@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, LandingPageComponent, IonApp, IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-app';
}
