using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sales_Managment_System.Common.Entities;
using Sales_Managment_System.Common.Models;
using Sales_Managment_System.Common.Models.Category;
using Sales_Managment_System.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sales_Managment_System.Controllers
{
    public class CategoryController : BaseController
    {
        private readonly DataContext _context;

        public CategoryController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            return Ok(await _context.Categories.ToListAsync());
        }

        [HttpGet("{CategoryId}")]
        public async Task<IActionResult> GetCategory(int CategoryId)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.Id == CategoryId);
            if (category == null)
            {
                return BadRequest();
            }

            return Ok(category);
        }

        [HttpPost]
        public async Task<IActionResult> InsertCategory([FromBody] InsertCategoryDto categoryDto)
        {
            var category = new Category
            {
                Name = categoryDto.Name,
                
                InsertedAt = DateTime.UtcNow,
            };

            _context.Categories.Add(category);

            await _context.SaveChangesAsync();

            return Ok(new Response { Status = "Success", Id = category.Id.ToString() });
        }

        [HttpPut("{categoryId}")]
        public async Task<IActionResult> EditProduct(int categoryId, [FromBody] InsertCategoryDto categoryDto)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.Id == categoryId);
            if (category == null)
            {
                return BadRequest();
            }

            category.Name = categoryDto.Name;
            
            category.UpdatedAt = DateTime.UtcNow;

            _context.Categories.Update(category);

            await _context.SaveChangesAsync();

            return Ok(new Response { Status = "Success", Id = category.Id.ToString() });
        }

        [HttpDelete("{categoryId}")]
        public async Task<IActionResult> DeletePCategory(int categoryId)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.Id == categoryId);
            if (category == null)
            {
                return BadRequest();
            }

            _context.Categories.Remove(category);

            await _context.SaveChangesAsync();

            return Ok(new Response { Status = "Success" });
        }

    }
}
