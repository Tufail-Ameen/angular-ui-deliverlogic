import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LandingsliderComponent } from "../../Components/landingslider/landingslider.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { SearchbarboxComponent } from "../../Components/searchbarbox/searchbarbox.component";
import { LandingBannerComponent } from "../../Components/landing-banner/landing-banner.component";
import { ResturantsSliderComponent } from "../../Components/resturants-slider/resturants-slider.component";
import { LandingCardsComponent } from "../../Components/landing-cards/landing-cards.component";
import { LandingOrderprocessComponent } from "../../Components/landing-orderprocess/landing-orderprocess.component";
import { LandingRetailcardComponent } from "../../Components/landing-retailcard/landing-retailcard.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [IonicModule, LandingsliderComponent, NavbarComponent, SearchbarboxComponent, LandingBannerComponent, ResturantsSliderComponent, LandingCardsComponent, LandingOrderprocessComponent, LandingRetailcardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
