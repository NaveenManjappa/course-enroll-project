using EnrollCourse.Core.Entities;
using EnrollCourse.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnrollCourse.Data
{
    public class CourseRepository : ICourseRepository
    {
        private readonly UaccDemoContext uaccDemoContext;

        public CourseRepository(UaccDemoContext uaccDemoContext)
        {
            this.uaccDemoContext = uaccDemoContext;
        }
        public async Task<List<CourseModel>> GetAllCoursesAsync(int? categoryId = null)
        {
            var query = uaccDemoContext.Courses
                .Include(c => c.Category)
                .Include(c =>c.Reviews)
                .AsQueryable();
            if (categoryId.HasValue)
            {
                query = query.Where(c =>c.CategoryId == categoryId);
            }

            var course = await query
                .Select(c => new CourseModel()
                {
                    CourseId = c.CourseId,
                    Title = c.Title,
                    Description = c.Description,
                    Price = c.Price,
                    CourseType = c.CourseType,
                    SeatsAvailable = c.SeatsAvailable,
                    Duration = c.Duration,
                    CategoryId = c.CategoryId,
                    InstructorId = c.InstructorId,
                    StartDate = c.StartDate,
                    EndDate = c.EndDate,
                    Category = new CourseCategoryModel()
                    {
                        CategoryId = c.Category.CategoryId,
                        CategoryName = c.Category.CategoryName,
                        Description = c.Category.Description
                    },                    
                    UserRating = new UserRatingModel()
                    {
                        CourseId = c.CourseId,
                        AverageRating = c.Reviews.Any() ? Convert.ToDecimal(c.Reviews.Average(r => r.Rating)) : 0,
                        TotalRating = c.Reviews.Count
                    }
                }).ToListAsync();
            return course;
        }

        public async Task<CourseDetailModel> GetCourseDetail(int courseId)
        {
            var course = await uaccDemoContext.Courses
                .Include(c => c.Category)
                .Include(c => c.Reviews)
                .Include(c => c.SessionDetails)
                .Where(c => c.CourseId == courseId)
                .Select(c => new CourseDetailModel()
                {
                    CourseId=c.CourseId,
                    Title = c.Title,
                    Description = c.Description,
                    Price = c.Price,
                    CourseType = c.CourseType,
                    SeatsAvailable = c.SeatsAvailable,
                    Duration = c.Duration,
                    CategoryId = c.CategoryId,
                    InstructorId = c.InstructorId,
                    StartDate = c.StartDate,
                    EndDate = c.EndDate,
                    Category=new CourseCategoryModel()
                    {
                        CategoryId=c.Category.CategoryId,
                        CategoryName=c.Category.CategoryName,
                        Description=c.Category.Description
                    },
                    Reviews = c.Reviews.Select(r=> new UserReviewModel()
                    {
                        CourseId = r.CourseId,
                        UserName=r.User.DisplayName,
                        Rating = r.Rating,
                        Comments = r.Comments,
                        ReviewDate=r.ReviewDate
                    }).OrderByDescending(o => o.ReviewDate).Take(10).ToList(),
                    SessionDetails = c.SessionDetails.Select(sd=> new SessionDetailModel()
                    {
                        SessionId=sd.SessionId,
                        CourseId=sd.CourseId,
                        Title=sd.Title,
                        Description=sd.Description,
                        VideoUrl=sd.VideoUrl,
                        VideoOrder=sd.VideoOrder
                    }).OrderBy(o => o.VideoOrder).ToList(),
                    UserRating = new UserRatingModel()
                    {
                        CourseId=c.CourseId,
                        AverageRating=c.Reviews.Any() ? Convert.ToDecimal(c.Reviews.Average(r=>r.Rating)):0,
                        TotalRating = c.Reviews.Count
                    }
                }).FirstOrDefaultAsync();

            return course;
        }
    }
}
