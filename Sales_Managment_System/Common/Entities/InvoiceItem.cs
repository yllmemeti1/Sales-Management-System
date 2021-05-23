using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sales_Managment_System.Common.Entities
{
    public class InvoiceItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int InvoiceId { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public double Discount { get; set; }

        public Product Product { get; set; }
        public Invoice Invoice { get; set; }
    }
}
