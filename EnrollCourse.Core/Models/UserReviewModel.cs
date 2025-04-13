using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnrollCourse.Core.Models
{
    public class UserReviewModel
    {
        public int CourseId { get; set; }
        public string UserName { get; set; }=string.Empty;
        public int Rating { get; set; }
        public string? Comments { get; set; }
        public DateTime ReviewDate { get; set; }
    }
}
