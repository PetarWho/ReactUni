using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FoodLookupAPI.Models
{
    public class AddFoodModel
    {
        [Required]
        [MinLength(3), MaxLength(25)]
        public string Description { get; set; } = null!;

        [Required]
        [Range(0f, 9999f)]
        [DefaultValue(0)]
        public float Kcal { get; set; }

        [Required]
        [Range(0f, 9999f)]
        [DefaultValue(0)]
        public float Protein { get; set; }

        [Required]
        [Range(0f, 9999f)]
        [DefaultValue(0)]
        public float Fat { get; set; }

        [Required]
        [Range(0f, 9999f)]
        [DefaultValue(0)]
        public float Carbs { get; set; }
    }
}
