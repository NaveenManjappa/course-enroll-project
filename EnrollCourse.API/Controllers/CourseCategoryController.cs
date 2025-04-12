using EnrollCourse.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EnrollCourse.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseCategoryController : ControllerBase
    {
        private readonly ICourseCategoryService courseCategoryService;

        public CourseCategoryController(ICourseCategoryService courseCategoryService)
        {
            this.courseCategoryService = courseCategoryService;
        }

       
    }
}
