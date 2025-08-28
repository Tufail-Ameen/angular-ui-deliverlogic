import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-resturant-page',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './resturant-page.component.html',
  styleUrls: ['./resturant-page.component.scss'],
})
export class ResturantPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
