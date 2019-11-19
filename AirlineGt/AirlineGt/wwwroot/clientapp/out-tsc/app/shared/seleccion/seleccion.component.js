import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data-service.service';
import { Router } from '@angular/router';
import { Body } from '../body';
var SeleccionComponent = /** @class */ (function () {
    function SeleccionComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.body = new Body();
    }
    SeleccionComponent.prototype.facturar = function () {
        var _this = this;
        this.dataService.seleccion.subTotal = this.dataService.seleccion.subtotal;
        this.dataService.Facturar()
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(['resumenCompra']);
            }
        }, function (err) { return _this.errorMessage = "No se pudo procesar la compra"; });
    };
    SeleccionComponent.prototype.vuelosRegreso = function () {
        this.router.navigate(["vuelosRegreso"]);
        this.body.atributo1 = "action name: Vuelos Ida";
        this.body.atributo2 = "destiny: Vuelos Regreso";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    SeleccionComponent.prototype.infoPasajero = function () {
        this.router.navigate(["infoPasajero"]);
        this.body.atributo1 = "action name: Vuelos Regreso";
        this.body.atributo2 = "destiny: Info Pasajero";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    SeleccionComponent.prototype.equipajeAdicional = function () {
        this.router.navigate(["equipajeAdicional"]);
        this.body.atributo1 = "action name: Info Pasajero";
        this.body.atributo2 = "destiny: Info Tarjeta";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    SeleccionComponent.prototype.pago = function () {
        this.router.navigate(["pago"]);
        this.body.atributo1 = "action name: Info Pasajero";
        this.body.atributo2 = "destiny: Factura";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    SeleccionComponent.prototype.ngOnInit = function () {
    };
    SeleccionComponent = __decorate([
        Component({
            selector: 'app-seleccion',
            templateUrl: './seleccion.component.html',
            styleUrls: ['./seleccion.component.css']
        }),
        __metadata("design:paramtypes", [DataService,
            Router])
    ], SeleccionComponent);
    return SeleccionComponent;
}());
export { SeleccionComponent };
//# sourceMappingURL=seleccion.component.js.map