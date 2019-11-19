import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { Router } from '@angular/router';
import { Body } from '../body';

@Component({
    selector: 'app-seleccion',
    templateUrl: './seleccion.component.html',
    styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {
    errorMessage: string;
    body: Body = new Body();
  constructor(private dataService: DataService,
              private router: Router) { }
    facturar() {
        this.dataService.seleccion.subTotal = this.dataService.seleccion.subtotal;
        this.dataService.Facturar()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(['resumenCompra']);
                }

            }, err => this.errorMessage = "No se pudo procesar la compra");

    }

    vuelosRegreso() {
        this.router.navigate(["vuelosRegreso"]);
        this.body.atributo1 = "action name: Vuelos Ida";
        this.body.atributo2 = "destiny: Vuelos Regreso";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("Navigation no funciono"));
    }

    infoPasajero() {
        this.router.navigate(["infoPasajero"]);
        this.body.atributo1 = "action name: Vuelos Regreso";
        this.body.atributo2 = "destiny: Info Pasajero";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("Navigation no funciono"));
    }

    equipajeAdicional() {
        this.router.navigate(["equipajeAdicional"]);
        this.body.atributo1 = "action name: Info Pasajero";
        this.body.atributo2 = "destiny: Info Tarjeta";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("Navigation no funciono"));
    }

    pago() {
        this.router.navigate(["pago"]);
        this.body.atributo1 = "action name: Info Pasajero";
        this.body.atributo2 = "destiny: Factura";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("Navigation no funciono"));
    }
  ngOnInit() {

  }

}
