import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Factura } from '../shared/factura';
import { Router } from '@angular/router';
import { Body } from '../shared/body';
var ResumenCompraComponent = /** @class */ (function () {
    function ResumenCompraComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.body = new Body();
    }
    ResumenCompraComponent.prototype.nuevaCompra = function () {
        this.dataService.seleccion = new Factura();
        this.router.navigate(["home"]);
        this.body.atributo1 = "action name: Regresar";
        this.body.atributo2 = "destiny: home";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    ResumenCompraComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "page ready: Factura";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    ResumenCompraComponent = __decorate([
        Component({
            selector: 'app-resumen-compra',
            templateUrl: './resumen-compra.component.html',
            styleUrls: ['./resumen-compra.component.css']
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], ResumenCompraComponent);
    return ResumenCompraComponent;
}());
export { ResumenCompraComponent };
//# sourceMappingURL=resumen-compra.component.js.map