using EnrollCourse.Core.Models;

namespace EnrollCourse.Service
{
    public interface ICourseCategoryService
    {
        public Task<CourseCategoryModel?> GetByIdAsync(int id);
        public Task<List<CourseCategoryModel>> GetCourseCategories();

    }
}
