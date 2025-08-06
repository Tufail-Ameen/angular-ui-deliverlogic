import { Component } from '@angular/core';
import { LandingsliderComponent } from "../../Components/landingslider/landingslider.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";

@Component({
  selector: 'app-landing-page',
  imports: [LandingsliderComponent, NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
