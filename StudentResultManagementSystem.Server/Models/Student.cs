using System.ComponentModel.DataAnnotations;

namespace StudentResultManagementSystem.Server.Models
{
    public class Student
    {
        [Key]
        public int StudentID { get; set; }

        public int? UserID { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Grade { get; set; }
    }
}
