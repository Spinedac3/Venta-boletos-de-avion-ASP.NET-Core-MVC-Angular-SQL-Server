import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Router } from '@angular/router';
import { Body } from '../shared/body';
var VuelosRegresoComponent = /** @class */ (function () {
    function VuelosRegresoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.vuelos = this.dataService.filtradoVuelosRegreso;
        this.errorMessage = '';
        this.body = new Body();
    }
    VuelosRegresoComponent.prototype.anadirASeleccion = function (vuelo) {
        this.dataService.añadirAOrden(vuelo);
        this.body.atributo1 = "page name: vuelos Regreso";
        this.body.atributo2 = "action name: añadirAseleccion";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("action funciono");
            }
        }, function (err) { return console.log("no guardo action"); });
    };
    VuelosRegresoComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "page ready: vuelos Regreso";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    VuelosRegresoComponent = __decorate([
        Component({
            selector: 'app-vuelos-regreso',
            templateUrl: './vuelos-regreso.component.html',
            styleUrls: ['./vuelos-regreso.component.css']
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], VuelosRegresoComponent);
    return VuelosRegresoComponent;
}());
export { VuelosRegresoComponent };
//# sourceMappingURL=vuelos-regreso.component.js.map