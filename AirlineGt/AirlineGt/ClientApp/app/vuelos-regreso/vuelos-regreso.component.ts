import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { IVuelo } from '../shared/ivuelo';
import { Router } from '@angular/router';
import { Body } from '../shared/body';

@Component({
  selector: 'app-vuelos-regreso',
  templateUrl: './vuelos-regreso.component.html',
  styleUrls: ['./vuelos-regreso.component.css']
})
export class VuelosRegresoComponent implements OnInit {

    constructor(private dataService: DataService, private router: Router) { }
    vuelos: IVuelo[] = this.dataService.filtradoVuelosRegreso;
    errorMessage = '';
    body: Body = new Body();
  anadirASeleccion(vuelo: IVuelo) {
    this.dataService.añadirAOrden(vuelo);
      this.body.atributo1 = "page name: vuelos Regreso";
      this.body.atributo2 = "action name: añadirAseleccion";
      this.dataService.pageReady(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
  }

    ngOnInit() {
        this.body.atributo1 = "page ready: vuelos Regreso";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
   
  }

}
