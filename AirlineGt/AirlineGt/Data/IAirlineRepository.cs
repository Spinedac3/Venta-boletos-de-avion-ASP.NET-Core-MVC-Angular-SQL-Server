using AirlineGt.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data
{

    public interface IAirlineRepository
    {
        IEnumerable<Factura> GetAllFacturas();
        IEnumerable<Vuelo> GetAllVuelos();
        IEnumerable<Vuelo> GetVuelosbyOrigen(int id);
        void Facturar(Factura newModel);
        bool SaveAll();
        void AddEntity(object model);
        void CrearVuelo(Vuelo newmodel);
    }
}
