import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../../../models/course';
import { MOCK_COURSES } from '../../../mock-data/mock-courses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css'
})
export class BrowseCourseComponent implements OnInit,OnChanges {
  courses:Course[] = [];
  @Input() categoryId:number=0;
  constructor(){
    this.courses = MOCK_COURSES;
  }
 
  ngOnInit(): void {
    this.getCourseByCategory()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCourseByCategory();
   }

  getCourseByCategory(){
    this.courses = MOCK_COURSES.filter(c => c.categoryId === this.categoryId);
  }

  formatPrice(price:number):string {
    return `£${price.toFixed(2)}`;
  }
}
