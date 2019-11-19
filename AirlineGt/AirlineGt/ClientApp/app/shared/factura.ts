import * as _ from "lodash";
import { IVuelo } from './ivuelo';

export class Factura {
    id: number;
    numeroFactura: string;
    fechaEmision: string;
    pasajero: Pasajero = new Pasajero();
    boletos: Array<Boleto> = new Array<Boleto>(); 
    maleta: number = 0;
    subTotal: number = this.subtotal;
    get subtotal(): number {
        return _.sum(_.map(this.boletos, i => ((i.vuelo.precioTurista * i.cantidad) + this.maleta) ));
    }
} 

export class Boleto {
    id: number;
    vuelo: IVuelo;
    cantidad: number;
   
}

export class Pasajero {
    id: number;
    nombres: string = "";
    apellidos: string;
    fechaNacimiento: string;
    correoElectronico: string;
    numeroTelefonico: number;
    tipoDocumento: string;
    numeroIdentificacion: number;
    domicilio: string;
    direccion: string;
    departamento: string;
    ciudad: string;
    codigoPostal: string;
    tarjeta: Tarjeta = new Tarjeta();
}
export class Tarjeta {
    id: number;
    franquicia: string;
    lugarEmision: string;
    numeroTarjeta: number;
    fechaVencimiento: string;
    ccv: number;
}