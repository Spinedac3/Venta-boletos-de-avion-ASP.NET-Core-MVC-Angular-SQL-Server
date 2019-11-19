import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';


import { DataService } from '../shared/data-service.service';

import { Router } from '@angular/router';
import { IVuelo } from '../shared/ivuelo';
import { Body } from '../shared/body';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
    body: Body = new Body();
    origen: SelectItem[];
    destino: SelectItem[];
    filtradoVuelosIda: IVuelo[];
    vuelos: IVuelo[] = [];
    vueloIda: IVuelo[] = [];
    errorMessage = '';

  selectedOrigen: string = "Guatemala";
  selectedDestino: string = "Panama";

  fechaPartida: Date;
  fechaRegreso: Date;

  val2: number;

    constructor(private route: Router, private dataService: DataService) { 
    this.origen = [
        { label: 'Guatemala', value: 'Guatemala'},
        {label: 'Aberdeen', value: 'Aberdeen'},
        {label: 'Beijing', value: 'Beijing'},
        {label: 'Colorado Springs', value: 'Colorado Springs'},
        { label: 'Panama', value: 'Panama'},
        {label: 'Alajuela Costa Rica', value: 'Alajuela Costa Rica'},
      ];
 
      this.destino = [
          { label: 'Guatemala', value: 'Guatemala'},
        {label: 'Aberdeen', value: 'Aberdeen'},
        {label: 'Beijing', value: 'Beijing'},
        {label: 'Colorado Springs', value: 'Colorado Springs'},
          { label: 'Panama', value: 'Panama'},
        {label: 'Alajuela Costa Rica', value: 'Alajuela Costa Rica'},
    ];
      this.vueloIda = [];
   
        
    }
    

    FiltrarIda(vuelos: IVuelo[], origen: string, destino: string, fecha: Date,
        fechaRegreso: Date) {
        this.dataService.filtrarVueloIda(vuelos, origen, destino, fecha, fechaRegreso);
        this.route.navigate(["vuelosIda"]);
        this.body.atributo1 = "action name: home";
        this.body.atributo2 = "destiny: vuelosIda";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("page ready funciono");
            }

        }, err => console.log("no guardo page ready"));

    }

    FiltrarIda2(vuelos: IVuelo[], origen: string, destino: string, fecha: Date,
        fechaRegreso: Date) {
        this.dataService.filtrarVueloIda(vuelos, origen, destino, fecha, fechaRegreso);
        this.route.navigate(["soloIda"]);
        this.body.atributo1 = "action name: home";
        this.body.atributo2 = "destiny: soloIda";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Navigation funciono");
            }

        }, err => console.log("no guardo page Navigation"));
    }

  ngOnInit() {
      this.dataService.getVuelos().subscribe({
          next: vuelos => {
              this.vuelos = vuelos;
          },
          error: err => this.errorMessage = err
      });
      this.body.atributo1 = "page ready: home";
      this.dataService.pageReady(this.body).subscribe(success => {
          if (success) {
              console.log("Page ready funciono");
          }

      }, err => console.log("Page Ready no funciono"));
  }
}
