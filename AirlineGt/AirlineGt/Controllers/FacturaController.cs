using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirlineGt.Data;
using AirlineGt.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AirlineGt.Controllers
{
    [Route("api/[Controller]")]
    public class FacturaController : Controller
    {
        private readonly IAirlineRepository airlineRepository;
        private readonly ILogger<FacturaController> logger;

        public FacturaController(IAirlineRepository airlineRepository,
            ILogger<FacturaController> logger)
        {
            this.airlineRepository = airlineRepository;
            this.logger = logger;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(airlineRepository.GetAllFacturas());
            }
            catch (Exception ex)
            {
                logger.LogError($"No se pudieron obtener las facturas: {ex}");
                return BadRequest("No se pudieron obtener las facturas");
            }
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Factura model)
        {
            try
            {
                var Newmodel = new Factura()
                {
                   Id = model.Id,
                   NumeroFactura = model.NumeroFactura,
                   fechaEmision = DateTime.Now,
                   Maleta = model.Maleta,
                   subTotal = model.subTotal
                };
                Newmodel.Pasajero = model.Pasajero;
                Newmodel.Pasajero.Tarjeta = model.Pasajero.Tarjeta;
                Newmodel.Boletos = model.Boletos;
                airlineRepository.Facturar(Newmodel);
                if (airlineRepository.SaveAll())
                {
                    /*   return Created($"/api/order/{Newmodel.Id}", Newmodel);*/
                    var results = new
                    {
                        ruta = $"{Newmodel.Id}"
                    };
                    return Created("", results);
                }
            }
            catch (Exception ex)
            {
                logger.LogError($"Fallo al Guardar Orden:{ex}");
            }

            return BadRequest("Failed to save new order");
        }
    }
}
