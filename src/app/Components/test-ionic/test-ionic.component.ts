import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-test-ionic',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol
  ],
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>Ionic Components Test</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>This card demonstrates that Ionic components are working properly!</p>
        
        <ion-button color="primary" (click)="showMessage()">
          Test Button
        </ion-button>
        
        <ion-segment [(ngModel)]="selectedSegment" (ionChange)="segmentChanged($event)">
          <ion-segment-button value="first">
            <ion-label>First</ion-label>
          </ion-segment-button>
          <ion-segment-button value="second">
            <ion-label>Second</ion-label>
          </ion-segment-button>
        </ion-segment>
        
        <ion-searchbar placeholder="Search something..."></ion-searchbar>
        
        <ion-grid>
          <ion-row>
            <ion-col size="6">
              <p>Grid Column 1</p>
            </ion-col>
            <ion-col size="6">
              <p>Grid Column 2</p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
  `,
  styles: [`
    ion-card {
      margin: 20px;
    }
    
    ion-button {
      margin: 10px 0;
    }
    
    ion-segment {
      margin: 10px 0;
    }
    
    ion-searchbar {
      margin: 10px 0;
    }
  `]
})
export class TestIonicComponent {
  selectedSegment = 'first';

  showMessage() {
    alert('Ionic button is working!');
  }

  segmentChanged(event: any) {
    console.log('Segment changed to:', event.detail.value);
  }
} 