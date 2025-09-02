import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inner-maincontent',
  templateUrl: './inner-maincontent.component.html',
  styleUrls: ['./inner-maincontent.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class InnerMaincontentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
