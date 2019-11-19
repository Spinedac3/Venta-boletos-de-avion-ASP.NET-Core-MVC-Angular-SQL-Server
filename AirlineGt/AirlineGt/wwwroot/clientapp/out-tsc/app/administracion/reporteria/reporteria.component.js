import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { Body } from '../../shared/body';
var ReporteriaComponent = /** @class */ (function () {
    function ReporteriaComponent(dataService) {
        this.dataService = dataService;
        this.body = new Body();
    }
    ReporteriaComponent.prototype.ngOnInit = function () {
        this.data = {
            labels: ['Guatema', 'Salvador', "Honduras", "Panama", "Nicaragua", "España"],
            datasets: [
                {
                    label: 'Boletos Comprados',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 23, 24, 12, 45, 55]
                }
            ]
        };
        this.data2 = {
            labels: ['Guatema', 'Salvador', "Honduras", "Panama", "Nicaragua", "España"],
            datasets: [
                {
                    label: 'Boletos Comprados',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [23, 55, 13, 45, 44, 13]
                }
            ]
        };
        this.data3 = {
            labels: ['Guatema', 'Salvador', "Honduras", "Panama", "Nicaragua", "España"],
            datasets: [
                {
                    label: 'Boletos Comprados',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [43, 21, 24, 55, 42, 11]
                }
            ]
        };
        this.body.atributo1 = "page ready: Reporteria";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    ReporteriaComponent = __decorate([
        Component({
            selector: 'app-reporteria',
            templateUrl: './reporteria.component.html',
            styleUrls: ['./reporteria.component.css']
        }),
        __metadata("design:paramtypes", [DataService])
    ], ReporteriaComponent);
    return ReporteriaComponent;
}());
export { ReporteriaComponent };
//# sourceMappingURL=reporteria.component.js.map