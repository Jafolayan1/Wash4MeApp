using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using System;
using Wash4MeApp.Models;

namespace Wash4MeApp.Data
{
    public static class ContextSeed
    {
        public static RoleManager<IdentityRole> _roleManager;
        static ContextSeed()
        {
        }
        public static async Task SeedRolesAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {

            _roleManager = roleManager;
            var roles = await _roleManager.Roles.ToListAsync();
            if (roles.Count <= 0)
            {
                await roleManager.CreateAsync(new IdentityRole(Enums.Roles.SuperAdmin.ToString()));
                await roleManager.CreateAsync(new IdentityRole(Enums.Roles.Admin.ToString()));
                await roleManager.CreateAsync(new IdentityRole(Enums.Roles.Basic.ToString()));
            }
        }

        public static async Task SeedSuperAdminAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            var defaultUser = new ApplicationUser
            {
                UserName = "SuperAdmin",
                Email = "superadmin@gmail.com",
                FirstName = "Super",
                LastName = "Admin",
                PhoneNumber = "1234567890",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true
            };
            if (userManager.Users.All(u => u.Id != defaultUser.Id))
            {
                var user = await userManager.FindByEmailAsync(defaultUser.Email);
                if (user == null)
                {
                    await userManager.CreateAsync(defaultUser, "123Pa$$word.");
                    await userManager.AddToRoleAsync(defaultUser, Enums.Roles.Basic.ToString());
                    await userManager.AddToRoleAsync(defaultUser, Enums.Roles.Admin.ToString());
                    await userManager.AddToRoleAsync(defaultUser, Enums.Roles.SuperAdmin.ToString());
                }

            }
        }
    }
}
