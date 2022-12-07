// Using statements
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;
namespace CRUDelicious.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    // Add a private variable of type MyContext (or whatever you named your context file)
    private MyContext _context;
    // Here we can "inject" our context service into the constructor 
    // The "logger" was something that was already in our code, we're just adding around it   
    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        // When our HomeController is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        // Now any time we want to access our database we use _context   
        List<Dish> AllDishes = _context.Dishes.ToList();
        return View("Index", AllDishes);
    }

    [HttpGet("dishes/new")]
    public IActionResult NewDish()
    {
        return View("NewDish");
    }

    [HttpPost("create")]
    public IActionResult Create(Dish newDish)
    {
        // Checks the validation model
        if (ModelState.IsValid)
        {
            // Adds dish to the db
            _context.Add(newDish);
            // Save the changes
            _context.SaveChanges();
            // Redirect
            return RedirectToAction("Index");
        }
        else
        {
            return View("NewDish", newDish);
        }
    }

    [HttpGet("dishes/{DishId}")]
    public IActionResult Show(int DishId)
    {
        Dish? showDish = _context.Dishes.SingleOrDefault(i => i.DishId == DishId);
        if (showDish != null)
        {
            return View("ShowDish", showDish);
        }
        else
        {
            return RedirectToAction("Index");
        }
    }

    [HttpPost("dishes/{DishId}/destroy")]
    public IActionResult Destroy(int DishId)
    {
        Dish? deleteDish = _context.Dishes.SingleOrDefault(i => i.DishId == DishId);
        if (deleteDish != null)
        {
            _context.Dishes.Remove(deleteDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        else
        {
            return RedirectToAction("Index");
        }
    }

    [HttpGet("dishes/{DishId}/edit")]
    public IActionResult Edit(int DishId)
    {
        Dish? dishToEdit = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
        if (dishToEdit != null)
        {
            return View("EditDish", dishToEdit);
        }
        else
        {
            return RedirectToAction("Index");
        }
    }

    [HttpPost("dishes/{DishId}/update")]
    public IActionResult Update(int DishId, Dish updatedDish)
    {
        if (ModelState.IsValid)
        {
            Dish? theDish = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
            theDish.DishName = updatedDish.DishName;
            theDish.ChefName = updatedDish.ChefName;
            theDish.Calories = updatedDish.Calories;
            theDish.Tastiness = updatedDish.Tastiness;
            theDish.Description = updatedDish.Description;
            theDish.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return Redirect($"/dishes/{DishId}");
        }
        else
        {
            return View("EditDish", updatedDish);
        }
    }
}
