import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-inner-navbar',
  templateUrl: './inner-navbar.component.html',
  styleUrls: ['./inner-navbar.component.scss'],
  imports: [NavbarComponent],
})
export class InnerNavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
