using Microsoft.AspNetCore.Identity;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using Wash4MeApp.Models;

namespace Wash4Me.Models
{
    public class Audit
    {
        public string CreatedBy { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime DateModified { get; set; } = DateTime.Now;
        public bool? IsApproved { get; set; }
        public bool? IsProcessed { get; set; }
        public string? ProcessedBy { get; set; }
    }

    public class Commission : Audit
    {
        public int CommissionId { get; set; }
        public bool IsPaid { get; set; } = false;

        [Display(Name = "Amount")]
        [Column(TypeName = "decimal(18,2)")]
        public decimal CommissionAmount { get; set; }

        [Required(ErrorMessage = "Select customer")]
        [Display(Name = "Customer")]
        [ForeignKey("ApplicationUserId")]
        public string ApplicationUserId { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }
    }

    public class Item : Audit
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }

        [Display(Name = "Price")]
        [Column(TypeName = "decimal(18,2)")]
        public decimal ItemAmount { get; set; }
    }

    public class Order : Audit
    {
        public int OrderId { get; set; }
        public int OrderCode { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal AmountPaid { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal AmountToBalance { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalCost { get; set; }

        public string DeliveryMethod { get; set; }
        public string OrderStatus { get; set; }
        
        public string ApplicationUserId { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
        public ICollection<Item> Items { get; set; }


        //public virtual ICollection<Payment> Payments { get; set; } 
    }


    //public class Payment : Audit
    //{
    //    public int PaymentId { get; set; }

    //    [Column(TypeName = "decimal(18,2)")]
    //    public decimal Amount { get; set; }

    //    [Column(TypeName = "decimal(18,2)")]
    //    public decimal Balance { get; set; }
    //    public string PaymentRef { get; set; }
    //    public string RefNo { get; set; }

    //    public int OrderId { get; set; }

    //    [ForeignKey("OrderId")] 
    //    public virtual Order Order { get; set; }

    //    public string ApplicationUserId { get; set; }
    //    public virtual ApplicationUser ApplicationUser { get; set; }
    //}

    public class Request : Audit
    {
        public int RequestId { get; set; }
        public string AccountNumber { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }

        public int ApplIdicationUser { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
        //public string Bank { get; set; }
        //public int RequestId { get; set; }
    }

    public class Wallet : Audit
    {
        public int WalletId { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal AvailableBalance { get; set; }
        //public decimal ClosingBalance { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal OpeningBalanc { get; set; }
        public string ApplicationUserId { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
