#pragma warning disable CS8618 
using System.ComponentModel.DataAnnotations;
namespace DojoSurveyWithValidations.Models;

public class Survey
{
    [Required]
    [MinLength(2)]
    public string name { get; set; }
    [Required]
    public string location { get; set; }
    [Required]
    public string language { get; set; }
    [MinLength(20)]
    public string? comment { get; set; }
}