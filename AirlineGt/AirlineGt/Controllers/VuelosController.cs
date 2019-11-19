using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirlineGt.Data;
using AirlineGt.Data.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AirlineGt.Controllers
{
    [Route("api/[Controller]")]
    public class VuelosController : Controller
    {
        private readonly IAirlineRepository airlineRepository;
        private readonly ILogger<FacturaController> logger;

        public VuelosController(IAirlineRepository airlineRepository,
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
                return Ok(airlineRepository.GetAllVuelos());
            }
            catch (Exception ex)
            {
                logger.LogError($"No se pudieron obtener las facturas: {ex}");
                return BadRequest("No se pudieron obtener las facturas");
            }
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(airlineRepository.GetVuelosbyOrigen(id));
            }
            catch (Exception ex)
            {
                logger.LogError($"No se pudieron obtener las facturas: {ex}");
                return BadRequest("No se pudieron obtener las facturas");
            }
        }
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Post([FromBody] Vuelo model)
        {
            try
            {
                var Newmodel = new Vuelo()
                {
                  Id = model.Id,
                  Origen = model.Origen,
                  Destino = model.Destino,
                  FechaPartida = model.FechaPartida,
                  PrecioTurista = model.PrecioTurista,
                  PrecioEjecutivo = model.PrecioEjecutivo,
                  HoraPartida = model.HoraPartida,
                  HoraLlegada= model.HoraLlegada,
                  NoParadas = model.NoParadas,
                  NoVueloEscala = model.NoVueloEscala,
                  Duracion = model.Duracion
                };
               
                airlineRepository.CrearVuelo(Newmodel);
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
