using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentResultManagementSystem.Server.Models
{
    public class Report
    {
        [Key]
        public int ReportID { get; set; }
        
        public int? StudentID { get; set; }

        public int? SubjectID { get; set; }

        public int? FullMarks { get; set; }

        public int? ScoredMarks { get; set; }
        public DateTime DateTS { get; set; }
    }
}
