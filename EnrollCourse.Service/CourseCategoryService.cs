using EnrollCourse.Core.Models;
using EnrollCourse.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnrollCourse.Service
{
    public class CourseCategoryService(ICourseCategoryRepository courseCategoryRepository) : ICourseCategoryService
    {
        private readonly ICourseCategoryRepository courseCategoryRepository = courseCategoryRepository;

        public async Task<CourseCategoryModel?> GetByIdAsync(int id)
        {      
            var data = await courseCategoryRepository.GetByIdAsync(id);
            return new CourseCategoryModel()
            {
                CategoryId = data.CategoryId,
                CategoryName = data.CategoryName,
                Description = data.Description
            };
        }

        public async Task<List<CourseCategoryModel>> GetCourseCategories()
        {
            var data = await courseCategoryRepository.GetCourseCategoriesAsync();
            var categoyList = data.Select(c => new CourseCategoryModel()
            {
                CategoryId = c.CategoryId,
                CategoryName = c.CategoryName,
                Description = c.Description
            }).ToList();

            return categoyList;
        }
    }
}
