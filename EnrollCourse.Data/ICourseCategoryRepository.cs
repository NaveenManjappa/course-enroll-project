using EnrollCourse.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnrollCourse.Data
{
    //public interface ICourseCategoryRepository
    //{
    //    CourseCategory? GetById(int id);
    //    List<CourseCategory> GetCourseCategories();
    //}

    public interface ICourseCategoryRepository
    {
        public Task<CourseCategory?> GetByIdAsync(int id);
        public Task<List<CourseCategory>> GetCourseCategoriesAsync();
    }
}
