import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';
var VuelosComponent = /** @class */ (function () {
    function VuelosComponent(dataService) {
        this.dataService = dataService;
        this.errorMessage = '';
        this._listFilter = '';
        this.body = new Body();
        this.filteredVuelos = [];
        this.vuelos = [];
    }
    Object.defineProperty(VuelosComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredVuelos = this.listFilter ? this.performFilter(this.listFilter) : this.vuelos;
        },
        enumerable: true,
        configurable: true
    });
    VuelosComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.vuelos.filter(function (vuelo) {
            return vuelo.origen.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    VuelosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getVuelos().subscribe({
            next: function (vuelos) {
                _this.vuelos = vuelos;
                _this.filteredVuelos = _this.vuelos;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
        this.body.atributo1 = "page ready: Vuelos";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    VuelosComponent = __decorate([
        Component({
            selector: 'app-vuelos',
            templateUrl: "./vuelos.component.html",
            styles: []
        }),
        __metadata("design:paramtypes", [DataService])
    ], VuelosComponent);
    return VuelosComponent;
}());
export { VuelosComponent };
//# sourceMappingURL=vuelos.component.js.map