import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  standalone:true
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize courses data
  }
}
