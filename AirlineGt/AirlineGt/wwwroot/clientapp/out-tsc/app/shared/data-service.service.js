import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Boleto, Factura } from './factura';
var DataService = /** @class */ (function () {
    function DataService(http, router) {
        this.http = http;
        this.router = router;
        this.filtradoVuelosIda = new Array();
        this.filtradoVuelosRegreso = new Array();
        this.Vuelos = "/api/vuelos";
        this.DesarrolloWeb = 'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/hackathon-gmoid/service/API/incoming_webhook/analitica';
        this.seleccion = new Factura();
        this.token = "";
        this.tokenExpiration = new Date();
    }
    DataService.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    DataService.prototype.filtrarVueloIda = function (vuelos, origen, destino, fecha, fechaRegreso) {
        var _this = this;
        this.filtradoVuelosIda = vuelos.filter(function (v) { return v.origen == origen && v.destino == destino &&
            _this.formatDate(fecha) == v.fechaPartida.substring(0, 10); });
        this.filtradoVuelosRegreso = vuelos.filter(function (v) { return v.destino == origen &&
            v.origen == destino && _this.formatDate(fechaRegreso) == v.fechaPartida.substring(0, 10); });
    };
    DataService.prototype.getVuelos = function () {
        return this.http.get(this.Vuelos)
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    DataService.prototype.getVuelo = function (id) {
        return this.getVuelos()
            .pipe(map(function (vuelo) { return vuelo.find(function (p) { return p.id === id; }); }));
    };
    DataService.prototype.añadirAOrden = function (vuelo) {
        var boleto = this.seleccion.boletos.find(function (i) { return i.vuelo.id == vuelo.id; });
        if (boleto) {
            boleto.cantidad++;
        }
        else {
            boleto = new Boleto();
            boleto.vuelo = vuelo;
            boleto.cantidad = 1;
            this.seleccion.boletos.push(boleto);
        }
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/credencial/CreateToken", creds)
            .pipe(map(function (response) {
            var tokenInfo = response;
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            return true;
        }));
    };
    DataService.prototype.Facturar = function () {
        var fecha = new Date();
        if (!this.seleccion.numeroFactura) {
            this.seleccion.numeroFactura = fecha.getFullYear().toString() + Math.round(Math.random()).toString();
        }
        console.log();
        return this.http.post("/api/factura", this.seleccion)
            .pipe(map(function (response) {
            return true;
        }));
    };
    DataService.prototype.crearVuelo = function (vuelo) {
        return this.http.post("/api/vuelos", vuelo, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map(function (response) {
            return true;
        }));
    };
    DataService.prototype.pageReady = function (body) {
        return this.http.post(this.DesarrolloWeb, body).pipe(map(function (response) {
            return true;
        }));
    };
    DataService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    };
    DataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data-service.service.js.map