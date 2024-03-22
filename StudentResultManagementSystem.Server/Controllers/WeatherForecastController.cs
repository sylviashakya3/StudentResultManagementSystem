using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentResultManagementSystem.Server.Data;
using StudentResultManagementSystem.Server.Models;

namespace StudentResultManagementSystem.Server.Controllers
{
    
    public class WeatherForecastController : ControllerBase
    {
        private readonly DBContext _context;
      
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, DBContext context)
        {
            _logger = logger;
            _context = context;
        }

       
        public IEnumerable<WeatherForecast> Get()
        {
            return _context.WeatherForecast.ToList();
        }
    }
}
