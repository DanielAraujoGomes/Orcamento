using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrcamentoApi.Command.Lista;
using OrcamentoApi.Data;
using OrcamentoApi.Models;

namespace OrcamentoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContaContabilController : Controller
    {
        [HttpGet("lista")]
        public ActionResult Listar([FromServices] Context context) => Ok(context.ContaContabil.Include(x => x.ContaContabilCalculo).Include(x => x.ContaContabilClassificacao).AsNoTracking().AsParallel().AsQueryable().Catalog());

        [HttpPost("lista")]
        public ActionResult ListaQuery([FromServices] Context context, [FromBody] Config config) => Ok(context.ContaContabil.Include(x=>x.ContaContabilCalculo).Include(x => x.ContaContabilClassificacao).AsNoTracking().AsParallel().AsQueryable().Catalog(config));

        [HttpGet("{id}")]
        public ActionResult Read([FromServices] Context context, [FromRoute] long id)
        {
            var model = context.ContaContabil.Include(x => x.ContaContabilCalculo).Include(x => x.ContaContabilClassificacao).AsNoTracking().AsParallel().AsQueryable().FirstOrDefault(x => x.Id.Equals(id));

            if(model == null) return NotFound();
            
            return Ok(model);
        }
        
        [HttpPost]
        public ActionResult Create([FromServices] Context context, [FromBody] ContaContabil model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    context.ContaContabil.Add(model);
                    context.SaveChanges();
                    transaction.Commit();
                }
                catch (Exception e)
                {
                    transaction.Rollback();
                    return BadRequest(e.Message);
                }
            }

            return Ok(model);
        }
        
        [HttpPut]
        public ActionResult Update([FromServices] Context context, [FromBody] ContaContabil model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    context.ContaContabil.Attach(model);
                    context.Entry(model).State = EntityState.Modified;
                    context.SaveChanges();
                    transaction.Commit();
                }
                catch (Exception e)
                {
                    transaction.Rollback();
                    return BadRequest(e.Message);
                }
            }

            return Ok(model);
        }
        
        [HttpDelete("{id}")]
        public ActionResult Delete([FromServices] Context context, [FromRoute] long id)
        {
            var model = context.ContaContabil.AsNoTracking().AsParallel().AsQueryable().FirstOrDefault(x => x.Id == id);

            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    context.ContaContabil.Remove(model ?? throw new Exception());
                    context.SaveChanges();

                    transaction.Commit();
                }
                catch (Exception e)
                {
                    transaction.Rollback();
                    return BadRequest(e.Message);
                }
            }

            return Ok();
        }
    }
}