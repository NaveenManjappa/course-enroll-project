using EnrollCourse.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnrollCourse.Data
{
    public interface ICourseRepository
    {
        public Task<List<CourseModel>> GetAllCoursesAsync(int? categoryId=null);
        public Task<CourseDetailModel> GetCourseDetail(int courseId);
    }
}
