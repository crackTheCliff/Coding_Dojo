using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Message()
    {
        Message message = new Message()
        {
            MyMessage = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam, neque repellendus, eos est excepturi quas illo deleniti, sequi consequatur quae! Distinctio nemo nobis veritatis ad voluptates commodi odio deleniti veniam necessitatibus eius! Incidunt unde, non, minima, quia iste dolore similique maiores reprehenderit praesentium doloribus quas et eligendi nostrum. Itaque voluptates, repellendus iure placeat maxime ad ex cumque quae esse facere provident, a aperiam dolorem consequatur sit minima id exercitationem ratione. Repellendus tenetur eos, quaerat minima cum eius omnis in ipsam vero officia accusamus aliquam mollitia amet at totam quasi non soluta. Necessitatibus, reiciendis. Quam consequatur ipsam inventore fugit dolores?"
        };
        return View(message);
    }

    public IActionResult Numbers()
    {
        int[] numbers = new int[]
        {
            1,2,3,4,5
        };
        return View(numbers);
    }

    public IActionResult AUser()
    {
        AUser aUser = new AUser()
        {
            aUser = "Cliff Helms"
        };
        return View(aUser);
    }

    public IActionResult Users()
    {
        AUser firstUser = new AUser()
        {
            aUser = "Cliff Helms"

        };
        AUser secondUser = new AUser()
        {
            aUser = "Nick Gibson"

        };
        AUser thirdUser = new AUser()
        {
            aUser = "Kevin Dang"

        };
        List<AUser> userList = new List<AUser>();
        userList.Add(firstUser);
        userList.Add(secondUser);
        userList.Add(thirdUser);
        return View(userList);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
