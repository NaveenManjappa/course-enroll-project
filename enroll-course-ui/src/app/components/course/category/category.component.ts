import { Component, Input } from '@angular/core';
import { CourseCategory } from '../../../models/category';
import { MOCK_CATEGORIES } from '../../../mock-data/mock-categories';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() categories:CourseCategory[] = [];
  @Input() viewType: 'tabs' | 'list'='list';
  constructor(private categoryService:CategoryService){
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
