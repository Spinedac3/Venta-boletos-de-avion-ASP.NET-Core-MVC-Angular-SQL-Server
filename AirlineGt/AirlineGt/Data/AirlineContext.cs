using AirlineGt.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data
{
    public class AirlineContext : IdentityDbContext<Usuario>
    {
        public AirlineContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Boleto> Boletos {get;set;}
        public DbSet<Vuelo> Vuelos { get; set; }
        public DbSet<Factura> Facturas { get; set; }
        public DbSet<Pasajero> Pasajeros { get; set; }
        public DbSet<Tarjeta> Tarjetas { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);


        }
    }
}
