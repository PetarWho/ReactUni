using FoodLookupAPI.Data;
using FoodLookupAPI.Entities;
using FoodLookupAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodLookupAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : Controller
    {
        private readonly ApplicationDbContext context;
        public FoodController(ApplicationDbContext _context)
        {
            context = _context;
        }
        [HttpGet("get")]
        public async Task<List<Food>?> GetFoods(string input)
        {
            var foods = await context.Foods.Where(x => x.Description.ToLower().Contains(input.ToLower())).ToListAsync();

            return foods;
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add(AddFoodModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var food = new Food()
            {
                Description = model.Description,
                Fat = model.Fat,
                Kcal = model.Kcal,
                Carbs = model.Carbs,
                Protein = model.Protein
            };
            try
            {
                await context.AddAsync(food);
                await context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest("Couldn't save your food to database. Please check inputs and try again!");
            }

            return Ok(food);
        }
    }
}
