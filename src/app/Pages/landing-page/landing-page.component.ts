import { Component } from '@angular/core';
import { LandingsliderComponent } from "../../Components/landingslider/landingslider.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { SearchbarboxComponent } from "../../Components/searchbarbox/searchbarbox.component";
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-landing-page',
  imports: [LandingsliderComponent, NavbarComponent, SearchbarboxComponent, IonContent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
