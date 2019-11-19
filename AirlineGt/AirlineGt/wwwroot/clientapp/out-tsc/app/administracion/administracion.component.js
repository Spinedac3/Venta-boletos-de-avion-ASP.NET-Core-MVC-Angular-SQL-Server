import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';
var AdministracionComponent = /** @class */ (function () {
    function AdministracionComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.body = new Body();
    }
    AdministracionComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "page ready: Administracion";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    AdministracionComponent.prototype.vuelos = function () {
        this.router.navigate(["vuelos"]);
        this.body.atributo1 = "action name: Administracion";
        this.body.atributo2 = "destiny: vuelos";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    AdministracionComponent.prototype.reporteria = function () {
        this.router.navigate(["/reporteria"]);
        this.body.atributo1 = "action name: Administracion";
        this.body.atributo2 = "destiny: reporteria";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    AdministracionComponent = __decorate([
        Component({
            selector: 'app-administracion',
            templateUrl: './administracion.component.html',
            styleUrls: ['./administracion.component.css']
        }),
        __metadata("design:paramtypes", [Router, DataService])
    ], AdministracionComponent);
    return AdministracionComponent;
}());
export { AdministracionComponent };
//# sourceMappingURL=administracion.component.js.map