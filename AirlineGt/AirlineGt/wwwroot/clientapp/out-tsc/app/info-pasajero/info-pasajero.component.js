import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';
var InfoPasajeroComponent = /** @class */ (function () {
    function InfoPasajeroComponent(dataService) {
        this.dataService = dataService;
        this.checked = false;
        this.checked1 = false;
        this.body = new Body();
    }
    // confirmarPasajero() {
    /* this.dataService.seleccion.pasajero.nombres = this.nombres;
     this.dataService.seleccion.pasajero.apellidos = this.apellidos;
     this.dataService.seleccion.pasajero.fechaNacimiento = this.fechaNacimiento;
     this.dataService.seleccion.pasajero.correoElectronico = this.correoElectronico;
     this.dataService.seleccion.pasajero.numeroTelefonico = this.numeroTelefonico;*/
    //   console.log(this.dataService.seleccion.pasajero);
    // }
    InfoPasajeroComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "page ready: Informacion Pasajero";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    InfoPasajeroComponent = __decorate([
        Component({
            selector: 'app-info-pasajero',
            templateUrl: './info-pasajero.component.html',
            styleUrls: ['./info-pasajero.component.css']
        }),
        __metadata("design:paramtypes", [DataService])
    ], InfoPasajeroComponent);
    return InfoPasajeroComponent;
}());
export { InfoPasajeroComponent };
//# sourceMappingURL=info-pasajero.component.js.map