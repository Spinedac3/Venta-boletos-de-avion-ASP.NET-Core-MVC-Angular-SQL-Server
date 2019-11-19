using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data.Entities
{
    public class Factura
    {
        public int Id { get; set; }
        public string NumeroFactura { get; set; }
        public DateTime fechaEmision { get; set; }
        public Pasajero Pasajero { get; set; }
        public ICollection<Boleto> Boletos{ get; set; }
          = new List<Boleto>();
        public int Maleta { get; set; }
        public double subTotal { get; set; }
    }
}
