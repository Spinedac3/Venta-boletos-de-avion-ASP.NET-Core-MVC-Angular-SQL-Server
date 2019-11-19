import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Router } from '@angular/router';
import { Body } from '../shared/body';
var SoloIdaComponent = /** @class */ (function () {
    function SoloIdaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.body = new Body();
        this.vuelos = this.dataService.filtradoVuelosIda;
        this.errorMessage = '';
    }
    SoloIdaComponent.prototype.anadirASeleccion = function (vuelo) {
        this.dataService.añadirAOrden(vuelo);
        this.body.atributo1 = "page name: soloIda";
        this.body.atributo2 = "action name: añadirAseleccion";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("action funciono");
            }
        }, function (err) { return console.log("no guardo action"); });
    };
    SoloIdaComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "Page name: Solo Ida";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page Ready funciono");
            }
        }, function (err) { return console.log("no guardo page Ready"); });
        if (this.router.url == '/vuelosIda') {
            this.dataService.ida = "Ida";
        }
    };
    SoloIdaComponent = __decorate([
        Component({
            selector: 'app-vuelo-ida',
            templateUrl: './solo-ida.component.html',
            styleUrls: ['./solo-ida.component.css']
        }),
        __metadata("design:paramtypes", [DataService,
            Router])
    ], SoloIdaComponent);
    return SoloIdaComponent;
}());
export { SoloIdaComponent };
//# sourceMappingURL=solo-ida.component.js.map