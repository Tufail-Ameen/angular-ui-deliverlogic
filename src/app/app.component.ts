import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { register } from 'swiper/element/bundle';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

register();


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FontAwesomeModule, IonApp, IonRouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Glue Clone';
}
