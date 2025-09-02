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
  pickedCategory: string[] = [];
  pickedPreference: string[] = [];
  clearCategoriesOptions: boolean = false;
  clearPreferencesOptions: boolean = false;
  noActiveFiltersCategories: boolean = true;
  noActiveFiltersPreferences: boolean = true;
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

  pickCategory(category: string) {
    // console.log(category);
    this.pickedCategory.push(category);
    this.clearCategoriesOptions = true;
    this.noActiveFiltersCategories = false;
  }

  pickPreference(preference: string) {
    this.pickedPreference.push(preference);
    this.clearPreferencesOptions = true;
    this.noActiveFiltersPreferences = false;
  }

  clearCategories() {
    // console.log("clear categories");
    this.pickedCategory = [];
    this.noActiveFiltersCategories = true;
  }

  clearPreferences() {
    // console.log("clear preferences");
    this.pickedPreference = [];
    this.noActiveFiltersPreferences = true;
  }

  clearAll() {
    this.pickedCategory = [];
    this.pickedPreference = [];
    this.selectedSortOption = '';
    this.noActiveFiltersCategories = true;
    this.noActiveFiltersPreferences = true;
    this.clearCategoriesOptions = false;
    this.clearPreferencesOptions = false;
    
    // Uncheck all radio buttons to remove the :checked CSS classes
    const radioButtons = document.querySelectorAll('input[name="sort-option"]') as NodeListOf<HTMLInputElement>;
    radioButtons.forEach(radio => {
      radio.checked = false;
    });
  }

}
