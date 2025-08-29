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
export class InnerSidebarComponent implements OnInit {

  categories: string[] = [
    "Acai Bowls",
    "American",
    "Asian",
    "Asian Fusion",
    "Bar & Grill",
    "Bar Food",
    "Bar-B-Que",
    "Bistro",
    "Boba Tea",
    "Breakfast",
    "Breakfast All Day",
    "Brunch",
    "Burgers",
    "Cafe",
    "Chinese",
    "Coffee & Tea",
    "Comfort Food",
    "Deli",
    "Desserts",
    "Fast Food",
    "French",
    "Greek",
    "Healthy",
    "Indian",
    "Italian",
    "Japanese",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican"
  ];

  preferences: string[] = [
    "Gluten-free",
    "Low-carb",
    "Organic",
    "Spicy",
    "Vegan",
    "Vegetarian"
  ];

  constructor() { }

  ngOnInit() { }



}
