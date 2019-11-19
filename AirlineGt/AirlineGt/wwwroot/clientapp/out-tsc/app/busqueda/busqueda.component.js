import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Router } from '@angular/router';
import { Body } from '../shared/body';
var BusquedaComponent = /** @class */ (function () {
    function BusquedaComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.body = new Body();
        this.vuelos = [];
        this.vueloIda = [];
        this.errorMessage = '';
        this.selectedOrigen = "Guatemala";
        this.selectedDestino = "Panama";
        this.origen = [
            { label: 'Guatemala', value: 'Guatemala' },
            { label: 'Aberdeen', value: 'Aberdeen' },
            { label: 'Beijing', value: 'Beijing' },
            { label: 'Colorado Springs', value: 'Colorado Springs' },
            { label: 'Panama', value: 'Panama' },
            { label: 'Alajuela Costa Rica', value: 'Alajuela Costa Rica' },
        ];
        this.destino = [
            { label: 'Guatemala', value: 'Guatemala' },
            { label: 'Aberdeen', value: 'Aberdeen' },
            { label: 'Beijing', value: 'Beijing' },
            { label: 'Colorado Springs', value: 'Colorado Springs' },
            { label: 'Panama', value: 'Panama' },
            { label: 'Alajuela Costa Rica', value: 'Alajuela Costa Rica' },
        ];
        this.vueloIda = [];
    }
    BusquedaComponent.prototype.FiltrarIda = function (vuelos, origen, destino, fecha, fechaRegreso) {
        this.dataService.filtrarVueloIda(vuelos, origen, destino, fecha, fechaRegreso);
        this.route.navigate(["vuelosIda"]);
        this.body.atributo1 = "action name: home";
        this.body.atributo2 = "destiny: vuelosIda";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("page ready funciono");
            }
        }, function (err) { return console.log("no guardo page ready"); });
    };
    BusquedaComponent.prototype.FiltrarIda2 = function (vuelos, origen, destino, fecha, fechaRegreso) {
        this.dataService.filtrarVueloIda(vuelos, origen, destino, fecha, fechaRegreso);
        this.route.navigate(["soloIda"]);
        this.body.atributo1 = "action name: home";
        this.body.atributo2 = "destiny: soloIda";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("no guardo page Navigation"); });
    };
    BusquedaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getVuelos().subscribe({
            next: function (vuelos) {
                _this.vuelos = vuelos;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
        this.body.atributo1 = "page ready: home";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    BusquedaComponent = __decorate([
        Component({
            selector: 'app-busqueda',
            templateUrl: './busqueda.component.html',
            styleUrls: ['./busqueda.component.css']
        }),
        __metadata("design:paramtypes", [Router, DataService])
    ], BusquedaComponent);
    return BusquedaComponent;
}());
export { BusquedaComponent };
//# sourceMappingURL=busqueda.component.js.map