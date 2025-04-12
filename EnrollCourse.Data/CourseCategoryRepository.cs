using EnrollCourse.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnrollCourse.Data
{
    //this is the primary constructor
    public class CourseCategoryRepository(UaccDemoContext uaccDemoContext) : ICourseCategoryRepository
    {
        private readonly UaccDemoContext uaccDemoContext = uaccDemoContext;

       

        public Task<CourseCategory?> GetByIdAsync(int id)
        {
            return uaccDemoContext.CourseCategories.FindAsync(id).AsTask();
        }       

        public Task<List<CourseCategory>> GetCourseCategoriesAsync()
        {
            return uaccDemoContext.CourseCategories.ToListAsync();
        }

        
    }
}
