// This brings all the MVC features we need to this file
using Microsoft.AspNetCore.Mvc;
// Be sure to use your own project's namespace here! 
namespace Countdown.Controllers;
public class ProjectController : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        DateTime endTime = new DateTime(2022, 12, 25, 0, 0, 0);
        DateTime currentTime = DateTime.Now;
        TimeSpan remaining = endTime - currentTime;
        ViewBag.end = String.Format("{0:f}", endTime);
        ViewBag.current = String.Format("{0:f}", currentTime);
        ViewBag.remain = String.Format("{0} days, {1} hours, {2} minutes, {3} seconds", remaining.Days, remaining.Hours, remaining.Minutes, remaining.Seconds);
        return View();
    }
}

