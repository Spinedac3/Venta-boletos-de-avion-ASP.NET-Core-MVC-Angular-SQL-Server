using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data.Entities
{
    public class Boleto
    {
        public int Id { get; set; }
        public Vuelo Vuelo { get; set; }
        public int Cantidad { get; set; }
        public Factura Factura { get; set; }
    }
}
