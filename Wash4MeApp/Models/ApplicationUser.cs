using Microsoft.AspNetCore.Identity;

using Wash4Me.Models;

namespace Wash4MeApp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int UsernameChangeLimit { get; set; } = 10;
        public byte[]? ProfilePicture { get; set; }
        //public bool? IsStaff { get; set; } = false;
        public virtual ICollection<Request> Requests { get; set; }
        public virtual ICollection<Commission> Commissions { get; set; }
        //public virtual ICollection<Payment> Payments { get; set; }
    }
}
