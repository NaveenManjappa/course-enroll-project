import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Course, CourseDetails, InstructorModel } from '../models/course';

@Injectable({providedIn: 'root'})
export class CourseService {
  private baseUrl=`${environment.apiUrl}/Course`;
  constructor(private http:HttpClient) { }
  
  getCoursesByCategoryId(categoryId:number):Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}/Category/${categoryId}`);
  }

  getCourseDetails(courseId:number):Observable<CourseDetails>{
    return this.http.get<CourseDetails>(`${this.baseUrl}/Details/${courseId}`);
  }

  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }

  getInstructors():Observable<InstructorModel[]> {
    return this.http.get<InstructorModel[]>(`${this.baseUrl}/Instructors`);
  }

}