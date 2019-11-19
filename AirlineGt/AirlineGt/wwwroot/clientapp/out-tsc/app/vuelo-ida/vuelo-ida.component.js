import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Router } from '@angular/router';
import { Body } from '../shared/body';
var VueloIdaComponent = /** @class */ (function () {
    function VueloIdaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.body = new Body();
        this.vuelos = this.dataService.filtradoVuelosIda;
        this.errorMessage = '';
    }
    VueloIdaComponent.prototype.anadirASeleccion = function (vuelo) {
        this.dataService.añadirAOrden(vuelo);
        this.body.atributo1 = "page name: vuelosIda";
        this.body.atributo2 = "action name: añadirAseleccion";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("action funciono");
            }
        }, function (err) { return console.log("no guardo action"); });
    };
    VueloIdaComponent.prototype.ngOnInit = function () {
        if (this.router.url == '/vuelosIda') {
            this.dataService.ida = "Ida";
        }
        this.body.atributo1 = "page ready: vuelosIda";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("page ready funciono");
            }
        }, function (err) { return console.log("no guardo page ready"); });
    };
    VueloIdaComponent = __decorate([
        Component({
            selector: 'app-vuelo-ida',
            templateUrl: './vuelo-ida.component.html',
            styleUrls: ['./vuelo-ida.component.css']
        }),
        __metadata("design:paramtypes", [DataService,
            Router])
    ], VueloIdaComponent);
    return VueloIdaComponent;
}());
export { VueloIdaComponent };
//# sourceMappingURL=vuelo-ida.component.js.map