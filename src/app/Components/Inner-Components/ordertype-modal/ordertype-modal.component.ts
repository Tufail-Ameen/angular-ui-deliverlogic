import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ordertype-modal',
  templateUrl: './ordertype-modal.component.html',
  styleUrls: ['./ordertype-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class OrdertypeModalComponent implements OnInit {

  // Properties
  ordertype: string = "takeout";

  date = new Date();

  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() orderTypeSelected = new EventEmitter<string>();

  constructor() {
    console.log('OrdertypeModalComponent constructor called');
  }

  ngOnInit() {
    console.log('OrdertypeModalComponent ngOnInit called');
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  selectOrderType(type: string) {
    console.log('Selected order type:', type);
    this.orderTypeSelected.emit(type);
    this.closeModal();
  }

  orderType(type: string) {
    this.ordertype = type;
  }

}
