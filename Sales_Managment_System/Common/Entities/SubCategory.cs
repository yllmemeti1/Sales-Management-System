﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sales_Managment_System.Common.Entities
{
    public class SubCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }

        public Category Category { get; set; }
        public List<Product> Products { get; set; } = new List<Product>();
    }
}
