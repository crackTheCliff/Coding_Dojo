#pragma warning disable CS8618
namespace DateValidator.Models;
using System.ComponentModel.DataAnnotations;

public class User
{
    [Required]
    public string Name { get; set; }

    [DataType(DataType.DateTime)]
    [Required]
    [FutureDate]
    public DateTime? Date { get; set; }
}


public class FutureDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        DateTime DateValue;
        if (value != null)
        {
            if ((DateTime)value > DateTime.Today)
            {
                return new ValidationResult("Date must be in the past!");
            }
        }
        return ValidationResult.Success;
    }
}