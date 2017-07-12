using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.DAL;
using WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class WebApiController : Controller
    {
        private readonly WebApiContext _context;
        
        public WebApiController(WebApiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Item> GetAll()
        {
            return _context.Items.ToList();
        }

        [HttpGet("FilterObjects")]
        public IEnumerable<Item> FilterObjects(int? category, int? subcategory)
        {
            if(subcategory != null)
            {
                return _context.Items.Where(i => i.SubcategoryId == subcategory).ToList();                
            }

            if(category != null)
            {
                return _context.Items.Where(i => i.Subcategory.CategoryId == category).ToList();
            }

            return _context.Items.ToList();
        }

        [HttpGet("GetCategoryHierarchy")]
        public IEnumerable<Category> GetCategoryHierarchy()
        {
            return _context.Categories.Include(c => c.Subcategories).ToList();
        }

        [HttpGet("{id}", Name = "GetItem")]
        public IActionResult GetById(int id)
        {
            var item = _context.Items.FirstOrDefault(t => t.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Item item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.Items.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetItem", new { id = item.Id }, item);
        }


    }
}
