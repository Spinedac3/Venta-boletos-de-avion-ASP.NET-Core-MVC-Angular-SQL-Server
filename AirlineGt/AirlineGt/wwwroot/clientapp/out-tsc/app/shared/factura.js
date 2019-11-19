import * as _ from "lodash";
var Factura = /** @class */ (function () {
    function Factura() {
        this.pasajero = new Pasajero();
        this.boletos = new Array();
        this.maleta = 0;
        this.subTotal = this.subtotal;
    }
    Object.defineProperty(Factura.prototype, "subtotal", {
        get: function () {
            var _this = this;
            return _.sum(_.map(this.boletos, function (i) { return ((i.vuelo.precioTurista * i.cantidad) + _this.maleta); }));
        },
        enumerable: true,
        configurable: true
    });
    return Factura;
}());
export { Factura };
var Boleto = /** @class */ (function () {
    function Boleto() {
    }
    return Boleto;
}());
export { Boleto };
var Pasajero = /** @class */ (function () {
    function Pasajero() {
        this.nombres = "";
        this.tarjeta = new Tarjeta();
    }
    return Pasajero;
}());
export { Pasajero };
var Tarjeta = /** @class */ (function () {
    function Tarjeta() {
    }
    return Tarjeta;
}());
export { Tarjeta };
//# sourceMappingURL=factura.js.map