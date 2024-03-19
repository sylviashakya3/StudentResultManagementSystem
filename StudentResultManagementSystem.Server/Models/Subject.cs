using System.ComponentModel.DataAnnotations;

namespace StudentResultManagementSystem.Server.Models
{
    public class Subject
    {
        [Key]
        public int SubjectID { get; set; }
        public string? SubjectName { get; set; }
    }
}
