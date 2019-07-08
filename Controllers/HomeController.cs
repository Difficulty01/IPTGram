using Microsoft.AspNetCore.Mvc;

namespace IPTGram.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        [HttpGet("/Home/Index")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("/Home/Details")]
        public IActionResult Details(int ?id)
        {
            ViewBag.id = id;
            return View();
        }
    }
}