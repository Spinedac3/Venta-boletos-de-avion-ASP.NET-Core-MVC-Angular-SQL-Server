import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Body } from '../../shared/body';
var VueloComponent = /** @class */ (function () {
    function VueloComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.body = new Body();
    }
    VueloComponent.prototype.getVuelo = function (id) {
        var _this = this;
        this.dataService.getVuelo(id).subscribe({
            next: function (vuelo) { return _this.vuelo = vuelo; },
            error: function (err) { return _this.error = err; },
        });
    };
    VueloComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.paramMap.get('id');
        if (param) {
            var id = +param;
            this.getVuelo(id);
        }
        this.body.atributo1 = "page ready: Vuelo Detail";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    VueloComponent = __decorate([
        Component({
            selector: 'app-vuelo',
            templateUrl: "vuelo.component.html",
            styleUrls: ["vuelo.component.css"]
        }),
        __metadata("design:paramtypes", [DataService,
            ActivatedRoute])
    ], VueloComponent);
    return VueloComponent;
}());
export { VueloComponent };
//# sourceMappingURL=vuelo.component.js.map