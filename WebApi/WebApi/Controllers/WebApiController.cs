using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.DAL;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class WebApiController : Controller
    {
        private readonly WebApiContext _context;

        [HttpGet]
        public IEnumerable<Item> GetAll()
        {
            return _context.Items.ToList();
        }

        [HttpGet("{id}", Name = "GetItem")]
        public IActionResult GetById(long id)
        {
            var item = _context.Items.FirstOrDefault(t => t.Id == id);

            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        public WebApiController(WebApiContext context)
        {
            _context = context;

            if (_context.Items.Count() == 0)
            {
                _context.Items.Add(new Item { Name = "Item1", Description = "Description1" });
                _context.SaveChanges();
            }
        }

    }
}
