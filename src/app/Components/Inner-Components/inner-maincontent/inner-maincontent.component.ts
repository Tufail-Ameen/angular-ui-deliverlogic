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
export class InnerMaincontentComponent implements OnInit {
  

  date = new Date();

  restaurants = [
    {
      name: "Panera Bread Florence",
      categories: ["American", "Breakfast", "Deli", "Salad"],
      time: "20 Mins",
      distance: "0.7 miles",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop"
    },
    {
      name: "Applebee's Florence",
      categories: ["American", "Bar & Grill"],
      time: "20 Mins",
      distance: "0.9 miles",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
    },
    {
      name: "Arby's Florence",
      categories: ["Sandwiches", "Fast Food"],
      time: "10 Mins",
      distance: "1.1 miles",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    },
    {
      name: "Wendy's Florence",
      categories: ["Burgers", "Fast Food"],
      time: "10 Mins",
      distance: "1.2 miles",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
      name: "Olive Garden",
      categories: ["Italian", "Pasta", "Family Style"],
      time: "25 Mins",
      distance: "1.3 miles",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop"
    },
    {
      name: "Chipotle Mexican Grill",
      categories: ["Mexican", "Fast Casual", "Burritos"],
      time: "15 Mins",
      distance: "0.8 miles",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    },
    {
      name: "Subway",
      categories: ["Sandwiches", "Fast Food", "Healthy"],
      time: "12 Mins",
      distance: "0.6 miles",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop"
    },
    {
      name: "Pizza Hut",
      categories: ["Pizza", "Italian", "Fast Food"],
      time: "18 Mins",
      distance: "1.0 miles",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    },
    {
      name: "Taco Bell",
      categories: ["Mexican", "Fast Food", "Tacos"],
      time: "8 Mins",
      distance: "0.5 miles",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    },
    {
      name: "McDonald's",
      categories: ["Burgers", "Fast Food", "Breakfast"],
      time: "7 Mins",
      distance: "0.4 miles",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    }
  ];

  openOrderTypeModal() {
    console.log('openOrderTypeModal');
  }

  constructor() { }

  ngOnInit() { }

  onImageError(event: any) {
    // Fallback to a default image if the restaurant image fails to load
    event.target.src = 'assets/images/restaurant-bg.png';
  }

}
