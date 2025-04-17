import { Component } from '@angular/core';
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
export class BrowseCourseComponent {
  courses:Course[] = [];
  constructor(){
    this.courses = MOCK_COURSES;
  }
}
