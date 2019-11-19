import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { Router } from '@angular/router';
import { Body } from '../../shared/body';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
        this.body = new Body();
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.body.atributo1 = "page name: Login";
        this.body.atributo2 = "action name: onLogin";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("action funciono");
            }
        }, function (err) { return console.log("no guardo action"); });
        this.errorMessage = "";
        this.dataService.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["administracion"]);
            }
        }, function (err) { return _this.errorMessage = "No se pudo iniciar sesion"; });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.body.atributo1 = "page ready: Login";
        this.dataService.pageReady(this.body).subscribe(function (success) {
            if (success) {
                console.log("Page ready funciono");
            }
        }, function (err) { return console.log("Page Ready no funciono"); });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map