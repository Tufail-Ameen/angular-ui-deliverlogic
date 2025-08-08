import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LandingsliderComponent } from "../../Components/landingslider/landingslider.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { SearchbarboxComponent } from "../../Components/searchbarbox/searchbarbox.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [IonicModule, LandingsliderComponent, NavbarComponent, SearchbarboxComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
