import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { Router } from '@angular/router';
import { Body } from '../../shared/body';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private dataService: DataService, private router: Router) { }
    errorMessage: string = "";
    public creds = {
        username: "",
        password: ""
    };
    body: Body = new Body();
    onLogin() {
        this.body.atributo1 = "page name: Login";
        this.body.atributo2 = "action name: onLogin";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("action funciono");
            }

        }, err => console.log("no guardo action"));
        this.errorMessage = "";
        this.dataService.login(this.creds)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["administracion"]);
                }
            }, err => this.errorMessage = "No se pudo iniciar sesion");
    }
    ngOnInit() {
        this.body.atributo1 = "page ready: Login";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
  }

}
