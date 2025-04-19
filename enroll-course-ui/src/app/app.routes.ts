import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/course/category/category.component';
import { BrowseComponent } from './components/course/browse/browse.component';
import { EnrollmentsComponent } from './components/users/enrollments/enrollments.component';
import { UpdateProfileComponent } from './components/users/update-profile/update-profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { VideoRequestsListComponent } from './components/user-ask/video-requests-list/video-requests-list.component';
import { VideoRequestsComponent } from './components/user-ask/video-requests/video-requests.component';
import { VideoRequestFormComponent } from './components/user-ask/video-request-form/video-request-form.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseComponent } from './components/course/course/course.component';
import { PlansAndPricingComponent } from './components/plans-and-pricing/plans-and-pricing.component';
import { BrowseCourseComponent } from './components/course/browse-course/browse-course.component';
import { CourseByCategorryComponent } from './components/course/course-by-categorry/course-by-categorry.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';
import { ViewUserProfileComponent } from './components/users/view-user-profile/view-user-profile.component';

export const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent,data:{animation:'HomePage'}},

  { path:'course/enrollments',component:EnrollmentsComponent},
  { path:'course/browse',component:BrowseCourseComponent},
  { path:'course/category',component:CategoryComponent},
  { path:'course/category/:categoryId',component:CourseByCategorryComponent},
  { path:'course/list',component:CourseListComponent},
  { path:'course/create',component:CourseComponent},
  { path:'course/details/:courseId',component:CourseDetailsComponent},

  { path:'user/update-profile',component:UpdateProfileComponent},
  { path:'user/chat',component:ChatComponent},
  { path:'user/instructors',component:ViewUserProfileComponent},

  { path:'technology/request/video',component:VideoRequestFormComponent},
  { path:'technology/requests',component:VideoRequestsComponent},
  { path:'admin/technology/requests',component:VideoRequestsListComponent},

  { path:'about-us',loadComponent:() => import('./components/core/about-us/about-us.component').then(c => c.AboutUsComponent)},
  { path:'contact-us',loadComponent:() => import('./components/core/contact-us/contact-us.component').then(c => c.ContactUsComponent)},
  { path:'plans-and-price',loadComponent:() => import('./components/plans-and-pricing/plans-and-pricing.component').then(c => c.PlansAndPricingComponent)}
];
