using EnrollCourse.Data;
using log4net;
using Microsoft.AspNetCore.Mvc;

namespace EnrollCourse.API.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(WeatherForecastController));

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly UaccDemoContext demoContext;

        public WeatherForecastController(ILogger<WeatherForecastController> logger,UaccDemoContext demoContext)
        {
            _logger = logger;
            this.demoContext = demoContext;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IActionResult Get()
        {
            var courses = this.demoContext.Courses.ToList();
            return Ok(courses);
        }
    }
}
