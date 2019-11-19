import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Body } from './shared/body';
import { DataService } from './shared/data-service.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.title = 'boletosAvionFront';
        this.body = new Body();
    }
    AppComponent.prototype.home = function () {
        this.router.navigate(["home"]);
        this.body.atributo1 = "action name: app-component";
        this.body.atributo2 = "destiny: home";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    AppComponent.prototype.admin = function () {
        this.router.navigate(["login"]);
        this.body.atributo1 = "action name: app-component";
        this.body.atributo2 = "destiny: login";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Navigation funciono");
            }
        }, function (err) { return console.log("Navigation no funciono"); });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [Router, DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map