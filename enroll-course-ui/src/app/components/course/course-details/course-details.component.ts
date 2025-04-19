import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseDetails } from '../../../models/course';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class CourseDetailsComponent implements OnInit {

  courseDetails:CourseDetails | null=null;
  courseId!:number;
  isLoggedin:boolean=true;
  videoUrl!:string;

  constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseId= Number(this.activatedRoute.snapshot.paramMap.get('courseId'));
    this.courseService.getCourseDetails(this.courseId).subscribe(res => {
      this.courseDetails = res;
      this.courseDetails.description = this.courseDetails.description.replace(/\n/g,'<br>');
      this.courseDetails.sessionDetails.forEach(s => {
        s.description = s.description.replace(/\n/g,'<br>');
      });
    });
  }

  openVideo(url:string){

  }
  closeVideo(){
    
  }

}
