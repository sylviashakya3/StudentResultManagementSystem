using Microsoft.EntityFrameworkCore;
using StudentResultManagementSystem.Server.Models;


namespace StudentResultManagementSystem.Server.Data
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }
        public DbSet<StudentResultManagementSystem.Server.Models.Student> Student { get; set; } = default!;
        public DbSet<StudentResultManagementSystem.Server.Models.WeatherForecast> WeatherForecast { get; set; } = default!;
        public DbSet<StudentResultManagementSystem.Server.Models.Subject> Subject { get; set; } = default!;
    }
}
