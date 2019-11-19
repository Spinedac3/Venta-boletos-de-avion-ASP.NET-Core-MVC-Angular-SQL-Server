using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data.Entities
{
    public class Tarjeta
    {
        public int Id { get; set; }   
        public string Franquicia { get; set; }
        public string LugarEmision { get; set; }
        public int NumeroTarjeta { get; set; }
        public DateTime FechaVencimiento { get; set; }
        public int CCV { get; set; }
    }
}
