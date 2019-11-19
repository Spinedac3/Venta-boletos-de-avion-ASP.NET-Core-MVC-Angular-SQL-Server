using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data.Entities
{
    public class Pasajero
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string CorreoElectronico { get; set; }
        public int NumeroTelefonico { get; set; }
        public string TipoDocumento { get; set; }
        public Int64 NumeroIdentificacion { get; set; }
        public string Domicilio { get; set; }
        public string Direccion { get; set; }
        public string Departamento { get; set; }
        public string Ciudad { get; set; }
        public string CodigoPostal { get; set; }
        public Tarjeta Tarjeta { get; set; }
    }
}
