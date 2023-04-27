using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entitities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    
    public class ProductsController :BaseApiController{
        public StoreContext _context { get; }
       
        public ProductsController(StoreContext context)
        {
            _context = context;  

            
        }
        [HttpGet]
        public async  Task<ActionResult<List<Product>>> GetProduct()
        {
            
            return await _context.Products.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult <Product>> GetProduct(int id){
            var product= await _context.Products.FindAsync(id);
            if(product==null) return NotFound();
            return product;

        }

    }
}