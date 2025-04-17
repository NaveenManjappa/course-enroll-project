import { CourseCategory } from "./category";

export interface UserRating {
  courseId:number;
  averageRating:number;
  totalRating:number;
}

export interface SessionDetail {

}

export interface Course {
  courseId:number;
  title:string;
  description:string;
  thumbnail?:string;
  price:number;
  courseType:'Online' | 'Offline';
  seatsAvailable:number | null;
  duration:number;
  categoryId:number;
  instructorId:number;
  startDate:string | null;
  endDate:string | null;
  category?:CourseCategory;
  userRating?:UserRating;
  sessionDetails?:SessionDetail[];
}

export interface UserReviewModel {
  reviewId:number;
  courseId:number;
  userId:number;
  userName:string;
  rating:number;
}