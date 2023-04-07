using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodController : Controller
    {
        private FoodDbContext context;
        public FoodController(FoodDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Food> Get()
        {
            return context.Foods.ToArray();
        }
    }
}
