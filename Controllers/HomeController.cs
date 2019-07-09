using Microsoft.AspNetCore.Mvc;

namespace IPTGram.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet()]
        //[HttpGet("/Home/Index")]
        public IActionResult Index()
        {
            return View();
        }
       // [HttpGet("/Home/Details")]
        [HttpGet()]
        public IActionResult Details(int ?id)
        {
            if(id==null)
                return View("Index");
            ViewBag.id = id;
            return View();
        }
    }
}