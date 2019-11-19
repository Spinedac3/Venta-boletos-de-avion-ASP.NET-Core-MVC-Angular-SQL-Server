using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using AirlineGt.Data.Entities;
using Microsoft.Extensions.Logging;

namespace AirlineGt.Data
{
    public class AirlineRepository : IAirlineRepository
    {
        private readonly AirlineContext ctx;
        private readonly ILogger<AirlineRepository> logger;

        public AirlineRepository(AirlineContext ctx, ILogger<AirlineRepository> logger)
        {
            this.ctx = ctx;
            this.logger = logger;
        }

        public void AddEntity(object model)
        {
            ctx.Add(model);
        }

        public void CrearVuelo(Vuelo newmodel)
        {
            AddEntity(newmodel);
        }

        public void Facturar(Factura newModel)
        {
            foreach (var boleto in newModel.Boletos)
            {
                boleto.Vuelo = ctx.Vuelos.Find(boleto.Vuelo.Id);
            }

            AddEntity(newModel);
        }

        public IEnumerable<Factura> GetAllFacturas()
        {
            return ctx.Facturas
                .Include(b => b.Boletos)
                .ThenInclude(v => v.Vuelo)
                .Include(p => p.Pasajero)
                .ThenInclude(t => t.Tarjeta)
                .ToList();
        }

        public IEnumerable<Vuelo> GetAllVuelos()
        {
            return ctx.Vuelos.ToList();
        }

        public IEnumerable<Vuelo> GetVuelosbyOrigen(int id)
        {
            string[] tipo = new string[] { "", "Guatemala", "Panama" };

            return ctx.Vuelos.Where(o => o.Origen == tipo[id]).ToList();
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}
