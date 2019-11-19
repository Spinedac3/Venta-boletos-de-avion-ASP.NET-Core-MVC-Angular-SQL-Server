import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { IVuelo } from '../../shared/ivuelo';
import { Router } from '@angular/router';
import { Body } from '../../shared/body';
var CrearVueloComponent = /** @class */ (function () {
    function CrearVueloComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.body = new Body();
        this.vuelo = new IVuelo();
        this.origenes = [
            { label: 'Guatemala', value: 'Guatemala' },
            { label: 'Aberdeen', value: 'Aberdeen' },
            { label: 'Beijing', value: 'Beijing' },
            { label: 'Colorado Springs', value: 'Colorado Springs' },
            { label: 'Panama', value: 'Panama' },
            { label: 'Alajuela Costa Rica', value: 'Alajuela Costa Rica' }
        ];
        this.destinos = [
            { label: 'Guatemala', value: 'Guatemala' },
            { label: 'Aberdeen', value: 'Aberdeen' },
            { label: 'Beijing', value: 'Beijing' },
            { label: 'Colorado Springs', value: 'Colorado Springs' },
            { label: 'Panama', value: 'Panama' },
            { label: 'Alajuela Costa Rica', value: 'Alajuela Costa Rica' }
        ];
    }
    CrearVueloComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    CrearVueloComponent.prototype.crear = function () {
        var _this = this;
        this.body.atributo1 = "page name: Crear-Vuelo";
        this.body.atributo2 = "action name: crear";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("action funciono");
            }
        }, function (err) { return console.log("no guardo action"); });
        this.vuelo.origen = this.selectedOrigenes;
        this.vuelo.destino = this.selectedDestinos;
        this.vuelo.fechaPartida = this.formatDate(this.fechaPartida);
        this.vuelo.precioTurista = this.precioTurista;
        this.vuelo.precioEjecutivo = this.precioEjecutivo;
        this.vuelo.horaPartida = this.horaPartida;
        this.vuelo.horaLlegada = this.horaLlegada;
        this.vuelo.noParadas = this.noParadas;
        this.vuelo.noVueloEscala = this.noVueloEscala;
        this.vuelo.noVueloDestino = this.noVueloDestino;
        this.vuelo.duracion = this.duracion;
        this.dataService.crearVuelo(this.vuelo).subscribe(function (success) {
            if (success) {
                _this.router.navigate(['vuelos']);
            }
        }, function (err) { return _this.error = "No se pudo crear el Vuelo"; });
    };
    CrearVueloComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "page ready: Crear-Vuelo";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    CrearVueloComponent = __decorate([
        Component({
            selector: 'app-crear-vuelo',
            templateUrl: "crear-vuelo.component.html",
            styleUrls: ["crear-vuelo.component.css"]
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], CrearVueloComponent);
    return CrearVueloComponent;
}());
export { CrearVueloComponent };
//# sourceMappingURL=crear-vuelo.component.js.map