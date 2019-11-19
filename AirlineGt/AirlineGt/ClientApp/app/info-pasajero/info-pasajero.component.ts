import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';

@Component({
  selector: 'app-info-pasajero',
  templateUrl: './info-pasajero.component.html',
  styleUrls: ['./info-pasajero.component.css']
})
export class InfoPasajeroComponent implements OnInit {
    checked: boolean = false;
    checked1: boolean = false;
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    correoElectronico: string;
    numeroTelefonico: number;
    body: Body = new Body();
    constructor(private dataService: DataService) { }
   // confirmarPasajero() {
       /* this.dataService.seleccion.pasajero.nombres = this.nombres;
        this.dataService.seleccion.pasajero.apellidos = this.apellidos;
        this.dataService.seleccion.pasajero.fechaNacimiento = this.fechaNacimiento;
        this.dataService.seleccion.pasajero.correoElectronico = this.correoElectronico;
        this.dataService.seleccion.pasajero.numeroTelefonico = this.numeroTelefonico;*/
     //   console.log(this.dataService.seleccion.pasajero);
   // }
    ngOnInit() {
        this.body.atributo1 = "page ready: Informacion Pasajero";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
  }

}
