using Microsoft.AspNetCore.Mvc.Rendering;
using Wash4Me.Models;

namespace Wash4MeApp.Models
{
    public class OrderViewModel
    {
        public List<Item> Items { get; set; }
        public SelectList ItemSelectList { get; set; }
        public List<Item> SelectedItems { get; set; }
    }

}
