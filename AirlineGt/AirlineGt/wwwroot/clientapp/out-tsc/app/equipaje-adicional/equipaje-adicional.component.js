import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';
var EquipajeAdicionalComponent = /** @class */ (function () {
    function EquipajeAdicionalComponent(dataService) {
        this.dataService = dataService;
        this.precio = 15;
        this.body = new Body();
    }
    EquipajeAdicionalComponent.prototype.anadir = function () {
        this.dataService.seleccion.maleta += this.precio;
        this.body.atributo1 = "page name: Equipaje Adicional";
        this.body.atributo2 = "action name: anadir()";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("action funciono");
            }
        }, function (err) { return console.log("no guardo action"); });
    };
    EquipajeAdicionalComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "page ready: Equipaje Adicional";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    EquipajeAdicionalComponent = __decorate([
        Component({
            selector: 'app-equipaje-adicional',
            templateUrl: './equipaje-adicional.component.html',
            styleUrls: ['./equipaje-adicional.component.css']
        }),
        __metadata("design:paramtypes", [DataService])
    ], EquipajeAdicionalComponent);
    return EquipajeAdicionalComponent;
}());
export { EquipajeAdicionalComponent };
//# sourceMappingURL=equipaje-adicional.component.js.map