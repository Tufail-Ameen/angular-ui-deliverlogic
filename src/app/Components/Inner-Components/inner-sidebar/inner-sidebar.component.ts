import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inner-sidebar',
  templateUrl: './inner-sidebar.component.html',
  styleUrls: ['./inner-sidebar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class InnerSidebarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
