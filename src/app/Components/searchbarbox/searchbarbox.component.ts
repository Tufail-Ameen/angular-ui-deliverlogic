import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-searchbarbox',
  templateUrl: './searchbarbox.component.html',
  styleUrls: ['./searchbarbox.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SearchbarboxComponent implements OnInit, AfterViewInit {

  segmentValue1: string = 'buttons';

  constructor() { }

  ngOnInit() {
    // Ensure component is properly initialized
    console.log('Searchbarbox component initialized');
  }

  ngAfterViewInit() {
    // Ensure component is visible after view initialization
    setTimeout(() => {
      const element = document.querySelector('.homecomponent');
      if (element) {
        (element as HTMLElement).style.display = 'block';
        (element as HTMLElement).style.visibility = 'visible';
      }
    }, 100);
  }
}
