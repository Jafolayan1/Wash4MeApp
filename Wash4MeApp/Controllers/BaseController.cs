using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using Wash4MeApp.Data;

using Wash4MeApp.Models;

namespace Wash4MeApp.Controllers
{
    public class BaseController : Controller
    {
        internal readonly ApplicationDbContext _context;
        internal readonly UserManager<ApplicationUser> _userManager;
        internal ApplicationUser _currentUser;
        public BaseController(UserManager<ApplicationUser> userManager, ApplicationDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }


        internal async Task<string> SetCurrentUser()
        {
            _currentUser = await _userManager.GetUserAsync(HttpContext.User);
            return $"{_currentUser?.FirstName} {_currentUser?.LastName}";
        }
    }
}
