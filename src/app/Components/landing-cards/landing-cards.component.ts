import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-landing-cards',
  templateUrl: './landing-cards.component.html',
  styleUrls: ['./landing-cards.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class LandingCardsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
