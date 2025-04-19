import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../../../models/course';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../services/course.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-browse-course',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css'
})
export class BrowseCourseComponent implements OnInit,OnChanges {
  courses:Course[] = [];
  @Input() categoryId:number=0;

  constructor(private courseService:CourseService){
    
  }
 
  ngOnInit(): void {
    this.categoryId > 0 ? this.getCourseByCategory() : this.getAllCourses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCourseByCategory();
   }

  getCourseByCategory(){
    this.courseService.getCoursesByCategoryId(this.categoryId).subscribe(data => {
      this.courses = data;
    });

  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe(res => {
      this.courses = res;
    });
  }

  formatPrice(price:number):string {
    return `£${price.toFixed(2)}`;
  }
}
