using EnrollCourse.Core.Models;
using EnrollCourse.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnrollCourse.Service
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository courseRepository;

        public CourseService(ICourseRepository courseRepository)
        {
            this.courseRepository = courseRepository;
        }
        public Task<List<CourseModel>> GetAllCoursesAsync(int? categoryId=null)
        {
            return courseRepository.GetAllCoursesAsync(categoryId);
        }

        public Task<CourseDetailModel> GetCourseDetailsAsync(int courseId)
        {
            return courseRepository.GetCourseDetailAsync(courseId);
        }
    }
}
