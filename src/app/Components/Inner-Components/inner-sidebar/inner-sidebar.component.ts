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

  // Properties
  showMoreCategories: string[] = [];
  showMorePreferences: string[] = [];
  categoriesExpanded: boolean = false;
  preferencesExpanded: boolean = false;
  selectedSortOption: string = '';

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

  ngOnInit() {
    this.showMoreCategories = this.categories.slice(0, 3);
    this.showMorePreferences = this.preferences.slice(0, 3);
  }

  // Method to handle sort option selection
  onSortOptionChange(option: string) {
    this.selectedSortOption = option;
  }

  toggleCategories(action: string) {
    if (action === 'more') {
      this.showMoreCategories = this.categories;
      this.categoriesExpanded = true;
    } else if (action === 'less') {
      this.showMoreCategories = this.categories.slice(0, 3);
      this.categoriesExpanded = false;
    }
  }

  togglePreferences(action: string) {
    if (action === 'more') {
      this.showMorePreferences = this.preferences;
      this.preferencesExpanded = true;
    } else if (action === 'less') {
      this.showMorePreferences = this.preferences.slice(0, 3);
      this.preferencesExpanded = false;
    }
  }

}
