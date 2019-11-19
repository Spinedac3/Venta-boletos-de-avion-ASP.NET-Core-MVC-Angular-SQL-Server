import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Body } from './shared/body';
import { DataService } from './shared/data-service.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'boletosAvionFront';
    body: Body = new Body();
    constructor(private router: Router, private dataService: DataService) {

    }
    home() {
        this.router.navigate(["home"]);
        this.body.atributo1 = "action name: app-component";
        this.body.atributo2 = "destiny: home";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("Navigation no funciono"));
    }
    admin() {
        this.router.navigate(["login"]);
        this.body.atributo1 = "action name: app-component";
        this.body.atributo2 = "destiny: login";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("Navigation no funciono"));
    }
    ngOnInit() {

    }
}
