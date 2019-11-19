import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';
var InformacionTarjetaComponent = /** @class */ (function () {
    function InformacionTarjetaComponent(dataService) {
        this.dataService = dataService;
        this.body = new Body();
        this.franquicias = [
            { label: 'Visa', value: 'Visa' },
            { label: 'Mastercard', value: 'Mastercard' }
        ];
        this.tipos = [
            { label: 'DPI', value: 'DPI' },
            { label: 'Pasaporte', value: 'Pasaporte' }
        ];
        this.lugares = [
            { label: 'Guatemala', value: 'Guatemala' },
            { label: 'Mexico', value: 'Mexico' }
        ];
    }
    // confirmarTarjeta() {
    /*this.dataService.seleccion.pasajero.tipoDocumento = this.selectedTipo;
    this.dataService.seleccion.pasajero.numeroIdentificacion = this.numeroIdentificacion;
    this.dataService.seleccion.pasajero.domicilio = this.domicilio;
    this.dataService.seleccion.pasajero.direccion = this.direccion;
    this.dataService.seleccion.pasajero.departamento = this.departamento;
    this.dataService.seleccion.pasajero.ciudad = this.ciudad;
    this.dataService.seleccion.pasajero.codigoPostal = this.codigoPostal;
    this.dataService.seleccion.pasajero.tarjeta.franquicia = this.selectedFranquicia;
    this.dataService.seleccion.pasajero.tarjeta.lugarEmision = this.selectedLugar;
    this.dataService.seleccion.pasajero.tarjeta.numeroTarjeta = this.numeroTarjeta;
    this.dataService.seleccion.pasajero.tarjeta.fechaVencimiento = this.fechaVencimiento;
    this.dataService.seleccion.pasajero.tarjeta.ccv = this.ccv;*/
    //    console.log(this.dataService.seleccion)
    //}
    InformacionTarjetaComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "page ready: Informacion Tarjeta";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    InformacionTarjetaComponent = __decorate([
        Component({
            selector: 'app-informacion-tarjeta',
            templateUrl: './informacion-tarjeta.component.html',
            styleUrls: ['./informacion-tarjeta.component.css']
        }),
        __metadata("design:paramtypes", [DataService])
    ], InformacionTarjetaComponent);
    return InformacionTarjetaComponent;
}());
export { InformacionTarjetaComponent };
//# sourceMappingURL=informacion-tarjeta.component.js.map