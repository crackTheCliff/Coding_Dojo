#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace FormSubmission.Models;

public class Form
{
    [Required]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters long")]
    public string Name {get;set;}
    [Required]
    [EmailAddress]
    public string Email {get;set;}
    [DataType(DataType.Date)]
    [Required]
    public DateTime? DoB {get;set;}
    [Required]
    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters long")]
    public string Password {get;set;}
    [Required]
    [OddNumber]
    public int FavOddNum {get;set;}
}

public class DateTimeAttribute : ValidationAttribute
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

public class OddNumberAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {

        if (((int)value) % 2 == 0)
        {  
            return new ValidationResult("Number must be odd!");   
        } else {   
            return ValidationResult.Success;  
        }  
    }
}