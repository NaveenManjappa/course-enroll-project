import { Course } from "../models/course";

export const MOCK_COURSES:Course[] =[
  {
    "courseId": 1,
    "title": "Angular Full Course",
    "description": "Comprehensive course covering Angular from basics to advanced topics.",
    "thumbnail":"https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 199.99,
    "courseType": "Online",
    "seatsAvailable": 50,
    "duration": 40.5,
    "categoryId": 1,
    "instructorId": 1,
    "startDate": "2024-09-01T00:00:00",
    "endDate": "2024-09-30T00:00:00",
    "category": {
      "categoryId": 1,
      "categoryName": "Programming",
      "description": "Courses related to software development and programming languages."
    },
    "userRating": {
      "courseId": 1,
      "averageRating": 5,
      "totalRating": 2
    }
  },
  {
    "courseId": 10,
    "title": "Full Stack Web Development",
    "description": "Learn to build complete web applications using HTML, CSS, JavaScript, and backend technologies.",
   "thumbnail":"https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 249.99,
    "courseType": "Online",
    "seatsAvailable": 75,
    "duration": 60,
    "categoryId": 1,
    "instructorId": 1,
    "startDate": "2024-10-01T00:00:00",
    "endDate": "2024-12-01T00:00:00",
    "category": {
      "categoryId": 1,
      "categoryName": "Programming",
      "description": "Courses related to software development and programming languages."
    },
    "userRating": {
      "courseId": 10,
      "averageRating": 0,
      "totalRating": 0
    }
  },
  {
    "courseId": 15,
    "title": "Angular Full Course",
    "description": "Comprehensive course covering Angular from basics to advanced topics.",
    "thumbnail":"https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 199.99,
    "courseType": "Online",
    "seatsAvailable": 50,
    "duration": 40.5,
    "categoryId": 1,
    "instructorId": 1,
    "startDate": "2024-09-01T00:00:00",
    "endDate": "2024-09-30T00:00:00",
    "category": {
      "categoryId": 1,
      "categoryName": "Programming",
      "description": "Courses related to software development and programming languages."
    },
    "userRating": {
      "courseId": 15,
      "averageRating": 0,
      "totalRating": 0
    }
  },
  {
    "courseId": 24,
    "title": "Full Stack Web Development",
    "description": "Learn to build complete web applications using HTML, CSS, JavaScript, and backend technologies.",
    "thumbnail":"https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 249.99,
    "courseType": "Online",
    "seatsAvailable": 75,
    "duration": 60,
    "categoryId": 2,
    "instructorId": 1,
    "startDate": "2024-10-01T00:00:00",
    "endDate": "2024-12-01T00:00:00",
    "category": {
      "categoryId": 2,
      "categoryName": "Programming",
      "description": "Courses related to software development and programming languages."
    },
    "userRating": {
      "courseId": 24,
      "averageRating": 0,
      "totalRating": 0
    }
  }
]