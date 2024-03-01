using FoodLookupAPI.Data;
using FoodLookupAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodLookupAPI.Controllers
{
    public class FoodController : Controller
    {
        private readonly ApplicationDbContext context;
        public FoodController(ApplicationDbContext _context)
        {
            context = _context;
        }
        [HttpGet]
        public async Task<List<Food>?> GetFoods(string input)
        {
            var foods = await context.Foods.Where(x => x.Description.ToLower().Contains(input.ToLower())).ToListAsync();

            return foods;
        }
    }
}
