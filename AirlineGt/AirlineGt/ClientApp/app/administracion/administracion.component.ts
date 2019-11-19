import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

    constructor(private router: Router, private dataService: DataService) { }
    body: Body = new Body();
    ngOnInit() {
        this.body.atributo1 = "page ready: Administracion";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
  }
    vuelos() {
        this.router.navigate(["vuelos"]);
        this.body.atributo1 = "action name: Administracion";
        this.body.atributo2 = "destiny: vuelos";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("Navigation no funciono"));
    }
  reporteria(){
      this.router.navigate(["/reporteria"]);
      this.body.atributo1 = "action name: Administracion";
      this.body.atributo2 = "destiny: reporteria";
      this.dataService.pageReady(this.body).subscribe(success => {
          if (success) {
              console.log("Navigation funciono");
          }

      }, err => console.log("Navigation no funciono"));
  }
}
