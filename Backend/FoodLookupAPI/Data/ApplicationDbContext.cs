using FoodLookupAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodLookupAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Food> Foods { get; set; }

        public ApplicationDbContext() { }

        public ApplicationDbContext(DbContextOptions options)
            : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                   .UseSqlServer();
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

