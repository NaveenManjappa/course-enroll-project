import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { CourseCategory } from '../models/category';
import { CourseDetails } from '../models/course';

@Injectable({providedIn: 'root'})
export class CategoryService {
  private baseUrl=`${environment.apiUrl}/CourseCategory`;
  constructor(private http:HttpClient) { }
  
  getCategories():Observable<CourseCategory[]>{
    console.log(this.baseUrl);
    return this.http.get<CourseCategory[]>(`${this.baseUrl}`);
  }

  
}