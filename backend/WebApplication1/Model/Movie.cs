using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class Food
    {

        [Key]
        public int FoodId { get; set; }
        public string EventName { get; set; }
        
        public string Vendor { get; set; }

        public int Rating { get; set; }

    }
}

