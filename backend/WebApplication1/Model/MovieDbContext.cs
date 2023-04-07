using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Model;

namespace WebApplication1
{
    public class MovieDbContext : DbContext
    {

        public MovieDbContext( DbContextOptions<MovieDbContext> options): base(options) { }
        
        public DbSet<Movie> Movies { get; set; }
    }
}
