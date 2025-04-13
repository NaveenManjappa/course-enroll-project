using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnrollCourse.Core.Models
{
    public class CourseDetailModel:CourseModel
    {
        public List<UserReviewModel> Reviews { get; set; }= new List<UserReviewModel>();
        public List<SessionDetailModel> SessionDetails { get; set; }=new List<SessionDetailModel>();
    }
}
