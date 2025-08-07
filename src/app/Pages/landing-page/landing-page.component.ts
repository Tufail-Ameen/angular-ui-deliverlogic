import { Component } from '@angular/core';
import { LandingsliderComponent } from "../../Components/landingslider/landingslider.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { SearchbarboxComponent } from "../../Components/searchbarbox/searchbarbox.component";

@Component({
  selector: 'app-landing-page',
  imports: [LandingsliderComponent, NavbarComponent, SearchbarboxComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
