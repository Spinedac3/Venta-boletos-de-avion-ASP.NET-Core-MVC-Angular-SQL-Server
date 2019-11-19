import * as _ from "lodash";
var Factura = /** @class */ (function () {
    function Factura() {
        this.boletos = new Array();
    }
    Object.defineProperty(Factura.prototype, "subtotal", {
        get: function () {
            return _.sum(_.map(this.boletos, function (i) { return (i.PrecioTurista * i.Cantidad) + (i.precioEquipajeAdicional * i.Cantidad); }));
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
//# sourceMappingURL=orden.js.map