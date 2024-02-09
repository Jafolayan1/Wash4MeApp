using Microsoft.AspNetCore.Mvc;

namespace Wash4MeApp.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
