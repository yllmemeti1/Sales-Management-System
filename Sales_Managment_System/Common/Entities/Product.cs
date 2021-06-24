﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sales_Managment_System.Common.Entities
{
    public class Product : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
      
        public int UnitsInStock { get; set; }
        public double Price { get; set; }
        public double Discount { get; set; }

        public Category Category { get; set; }
      
        public List<ProductUnit> Units { get; set; } = new List<ProductUnit>();
    }
}
