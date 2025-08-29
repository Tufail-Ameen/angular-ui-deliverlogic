import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InnerNavbarComponent } from "../../Components/Inner-Components/inner-navbar/inner-navbar.component";
import { InnerSidebarComponent } from "../../Components/Inner-Components/inner-sidebar/inner-sidebar.component";
import { InnerMaincontentComponent } from "../../Components/Inner-Components/inner-maincontent/inner-maincontent.component";

@Component({
  selector: 'app-resturant-page',
  standalone: true,
  imports: [IonicModule, CommonModule, InnerNavbarComponent, InnerSidebarComponent, InnerMaincontentComponent],
  templateUrl: './resturant-page.component.html',
  styleUrls: ['./resturant-page.component.scss'],
})
export class ResturantPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
