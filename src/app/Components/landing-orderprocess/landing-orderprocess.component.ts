import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-landing-orderprocess',
  templateUrl: './landing-orderprocess.component.html',
  styleUrls: ['./landing-orderprocess.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class LandingOrderprocessComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
