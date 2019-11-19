using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data.Entities
{
    public class Vuelo
    {
        public int Id { get; set; }
        public string Origen{ get; set; }
        public string Destino { get; set; }
        public DateTime FechaPartida { get; set; }
        public double PrecioTurista { get; set; }
        public double PrecioEjecutivo { get; set; }
        public double HoraPartida { get; set; }
        public double HoraLlegada { get; set; }
        public int NoParadas { get; set; }
        public string NoVueloEscala { get; set; }
        public string NoVueloDestino { get; set; }
        public double Duracion { get; set; }

    }
}
