import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowseCourseComponent } from '../browse-course/browse-course.component';

@Component({
  selector: 'app-course-by-categorry',
  standalone: true,
  imports: [BrowseCourseComponent],
  templateUrl: './course-by-categorry.component.html',
  styleUrl: './course-by-categorry.component.css'
})
export class CourseByCategorryComponent implements OnInit {
  categoryId:number=0;
  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoryId =Number(params.get('categoryId'));
    })
  }
}
