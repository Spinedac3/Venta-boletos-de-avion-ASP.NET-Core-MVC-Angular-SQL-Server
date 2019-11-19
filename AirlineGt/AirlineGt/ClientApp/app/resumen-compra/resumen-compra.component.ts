import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Factura } from '../shared/factura';
import { Router } from '@angular/router';
import { Body } from '../shared/body';

@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.css']
})
export class ResumenCompraComponent implements OnInit {
    body: Body = new Body();
    constructor(private dataService: DataService, private router: Router) { }
    nuevaCompra() {
        this.dataService.seleccion = new Factura();
        this.router.navigate(["home"]);
        this.body.atributo1 = "action name: Regresar";
        this.body.atributo2 = "destiny: home";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("Navigation no funciono"));

    }
    ngOnInit() {
        this.body.atributo1 = "page ready: Factura";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
  }

}
