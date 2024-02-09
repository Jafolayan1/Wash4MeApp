using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

using Wash4Me.Models;

using Wash4MeApp.Data;

namespace Wash4MeApp.Controllers
{
    public class CommissionsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CommissionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Commissions
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.Commissions.Include(c => c.ApplicationUser);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: Commissions/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Commissions == null)
            {
                return NotFound();
            }

            var commission = await _context.Commissions
                .Include(c => c.ApplicationUser)
                .FirstOrDefaultAsync(m => m.CommissionId == id);
            if (commission == null)
            {
                return NotFound();
            }

            return View(commission);
        }

        // GET: Commissions/Create
        public IActionResult Create()
        {
            ViewData["ApplicationUserId"] = new SelectList(_context.Users, "Id", "UserName");
            return View();
        }

        // POST: Commissions/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CommissionId,IsPaid,CommissionAmount,ApplicationUserId,CreatedBy,DateCreated,DateModified,IsApproved,IsProcessed,ProcessedBy")] Commission commission)
        {
            if (ModelState.IsValid)
            {
                _context.Add(commission);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ApplicationUserId"] = new SelectList(_context.Users, "Id", "Id", commission.ApplicationUserId);
            return View(commission);
        }

        // GET: Commissions/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Commissions == null)
            {
                return NotFound();
            }

            var commission = await _context.Commissions.FindAsync(id);
            if (commission == null)
            {
                return NotFound();
            }
            ViewData["ApplicationUserId"] = new SelectList(_context.Users, "Id", "Id", commission.ApplicationUserId);
            return View(commission);
        }

        // POST: Commissions/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("CommissionId,IsPaid,CommissionAmount,ApplicationUserId,CreatedBy,DateCreated,DateModified,IsApproved,IsProcessed,ProcessedBy")] Commission commission)
        {
            if (id != commission.CommissionId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(commission);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CommissionExists(commission.CommissionId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["ApplicationUserId"] = new SelectList(_context.Users, "Id", "Id", commission.ApplicationUserId);
            return View(commission);
        }

        // GET: Commissions/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Commissions == null)
            {
                return NotFound();
            }

            var commission = await _context.Commissions
                .Include(c => c.ApplicationUser)
                .FirstOrDefaultAsync(m => m.CommissionId == id);
            if (commission == null)
            {
                return NotFound();
            }

            return View(commission);
        }

        // POST: Commissions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Commissions == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Commissions'  is null.");
            }
            var commission = await _context.Commissions.FindAsync(id);
            if (commission != null)
            {
                _context.Commissions.Remove(commission);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CommissionExists(int id)
        {
          return _context.Commissions.Any(e => e.CommissionId == id);
        }
    }
}
