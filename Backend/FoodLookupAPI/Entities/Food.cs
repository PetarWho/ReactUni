using System.ComponentModel.DataAnnotations;

namespace FoodLookupAPI.Entities
{
    public class Food
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MinLength(3), MaxLength(25)]
        public string Description { get; set; } = null!;

        [Required]
        [Range(0f, 9999f)]
        public float Kcal { get; set; }

        [Required]
        [Range(0f, 9999f)]
        public float Protein { get; set; }

        [Required]
        [Range(0f, 9999f)]
        public float Fat { get; set; }

        [Required]
        [Range(0f, 9999f)]
        public float Carbs { get; set; }
    }
}
