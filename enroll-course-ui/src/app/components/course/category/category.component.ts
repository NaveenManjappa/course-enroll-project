import { Component } from '@angular/core';
import { CourseCategory } from '../../../models/category';
import { MOCK_CATEGORIES } from '../../../mock-data/mock-categories';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories:CourseCategory[] = [];
  constructor(){
    this.categories = MOCK_CATEGORIES;
  }

}
