// This brings all the MVC features we need to this file
using Microsoft.AspNetCore.Mvc;
// Be sure to use your own project's namespace here! 
namespace PortfolioII.Controllers;
public class ProjectController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }
    [HttpGet("projects")]
    public ViewResult Projects()
    {
        return View();
    }
    [HttpGet("contact")]
    public ViewResult Contact()
    {
        return View();
    }
}

